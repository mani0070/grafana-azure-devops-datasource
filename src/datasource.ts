import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { AzureDevopsDataSource } from './AzureDevopsDatasource';

export class Datasource extends DataSourceApi {
  private azureDevopsDataSource: AzureDevopsDataSource;
  constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
    super(instanceSettings);
    this.azureDevopsDataSource = new AzureDevopsDataSource(this.instanceSettings, this.backendSrv, this.templateSrv);
  }
  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      this.azureDevopsDataSource
        .query({
          targets: [
            {
              hide: false,
            },
          ],
        })
        .then((result: any) => {
          const res = result && result[0] ? result[0] : undefined;
          if (res && res.result && res.result.status === 200 && res.result.data && res.result.data.count > 0) {
            resolve({ message: `Successfully Connected to Azure Devops. ${res.result.data.count} projects found.`, status: 'success' });
          } else {
            reject({ message: 'Failed to fetch details from Azure Devops', status: 'error' });
          }
        })
        .catch((ex: any) => {
          reject({ message: 'Failed to connected Azure Devops', status: 'error' });
        });
    });
  }
  query(options: any) {
    const promises: any[] = [];
    const azureDevopsOptions = cloneDeep(options);
    if (azureDevopsOptions.targets.length > 0) {
      const azureDevopsPromise = this.azureDevopsDataSource.query(azureDevopsOptions);
      if (azureDevopsPromise) {
        promises.push(azureDevopsPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }
  annotationQuery(options: any) {
    console.log(options);
    const promises: any[] = [];
    return Promise.all(promises).then(results => {
      return [];
    });
  }
  metricFindQuery(query: string) {
    console.log(query);
    return Promise.resolve([]);
  }
}
