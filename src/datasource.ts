import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { AzureDevopsDataSource } from './AzureDevopsDatasource';
import { AzureDevopsProject, AzureDevopsTeam } from 'AzureDevopsConnection';

export class Datasource extends DataSourceApi {
  private azureDevopsDataSource: AzureDevopsDataSource;

  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    this.azureDevopsDataSource = new AzureDevopsDataSource(this.instanceSettings);
  }
  testDatasource() {
    return this.azureDevopsDataSource.testConnection();
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
  annotationQuery() {
    const promises: any[] = [];
    return Promise.all(promises).then(results => {
      return [];
    });
  }
  async metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    query = this.templateSrv.replace(query);
    let results: any[] = [];
    if (query.startsWith('Projects(') && query.endsWith(')')) {
      const projects: AzureDevopsProject[] = await this.azureDevopsDataSource.getProjects();
      results = projects
        .map(p => p.asSelectable())
        .map(p => {
          return {
            text: p.label,
            value: p.value,
          };
        });
    } else if (query.startsWith('Teams(') && query.endsWith(')')) {
      const projectId = query.replace(`Teams(`, ``).slice(0, -1);
      const teams: AzureDevopsTeam[] = await this.azureDevopsDataSource.getTeamsByProject(projectId);
      results = teams
        .map(p => p.asSelectable())
        .map(p => {
          return {
            text: p.label,
            value: p.value,
          };
        });
    } else if (query.startsWith('Pipelines(') && query.endsWith(')')) {
      const projectId = query.replace(`Pipelines(`, ``).slice(0, -1);
      const teams: AzureDevopsTeam[] = await this.azureDevopsDataSource.getPipelines(projectId);
      results = teams
        .map(p => p.asSelectable())
        .map(p => {
          return {
            text: p.label,
            value: p.value,
          };
        });
    }
    return Promise.resolve(results);
  }
}
