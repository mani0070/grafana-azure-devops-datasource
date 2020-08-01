export class AzureDevopsDataSource {
  private url: string;
  constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
    this.url = this.instanceSettings.url + '/azuredevops';
    console.log(typeof this.templateSrv);
  }
  private doAzureDevopsRequest(options: any, maxRetries = 1) {
    return this.backendSrv
      .datasourceRequest({
        method: 'GET',
        url: this.url + `/_apis/projects?api-version=6.0-preview.4`,
      })
      .catch((error: any) => {
        if (maxRetries > 0) {
          return this.doAzureDevopsRequest(options, maxRetries - 1);
        }
        throw error;
      });
  }
  private doQueries(queries: any[]) {
    return queries.map((query: any) => {
      return this.doAzureDevopsRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  query(options: any): Promise<any> {
    const queries: any[] = options.targets.filter((item: any) => {
      return item.hide !== true;
    });
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((results: any) => {
      return results;
    });
  }
}
