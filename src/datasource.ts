import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi, DataQuery } from '@grafana/data';
import { AzureDevopsInstance } from './azure_devops/AzureDevopsInstance';
import { AzureDevopsProject } from './azure_devops/core/AzureDevopsProject';
import { AzureDevopsTeam } from './azure_devops/core/AzureDevopsTeam';

export interface AzureDevopsQueryStructure extends DataQuery {
  serviceType?: string;
  queryType?: string;
  projectId?: string;
  projectName?: string;
  pipelineId?: string;
  pipelineName?: string;
}

export class Datasource extends DataSourceApi {
  private azureDevopsInstance: AzureDevopsInstance;
  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    this.azureDevopsInstance = new AzureDevopsInstance(this.instanceSettings);
  }
  testDatasource() {
    return this.azureDevopsInstance.testConnection();
  }
  query(options: any) {
    const promises: any[] = [];
    const azureDevopsOptions = cloneDeep(options);
    if (azureDevopsOptions.targets.length > 0) {
      const azureDevopsPromise = this.azureDevopsInstance.query(azureDevopsOptions);
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
    return Promise.all(promises).then(results => []);
  }
  async metricFindQuery(query = '') {
    if (!query) {
      return Promise.resolve([]);
    }
    query = this.templateSrv.replace(query);
    let results: any[] = [];
    if (query.startsWith('Projects(') && query.endsWith(')')) {
      const projects: AzureDevopsProject[] = await this.azureDevopsInstance.listProjects();
      results = projects.map(p => p.asVariable());
    } else if (query.startsWith('Teams(') && query.endsWith(')')) {
      const projectId = query.replace(`Teams(`, ``).slice(0, -1);
      const teams: AzureDevopsTeam[] = await this.azureDevopsInstance.listTeamsByProject(projectId);
      results = teams.map(p => p.asVariable());
    } else if (query.startsWith('Pipelines(') && query.endsWith(')')) {
      const projectId = query.replace(`Pipelines(`, ``).slice(0, -1);
      const teams: AzureDevopsTeam[] = await this.azureDevopsInstance.pipelineService.getPipelinesByProjectId(projectId);
      results = teams.map(p => p.asVariable());
    }
    return Promise.resolve(results);
  }
}
