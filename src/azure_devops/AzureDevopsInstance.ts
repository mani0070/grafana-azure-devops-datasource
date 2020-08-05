import { doBackendRequest } from './Backend';
import { AzureDevopsProject } from './core/AzureDevopsProject';
import { AzurePipelinesService } from './pipelines/AzurePipelinesService';
import { AzureBoardsService } from './boards/AzureBoardsService';
import { AzureProjectService } from './core/AzureDevopsProject';

export class AzureDevopsInstance {
  url: string;
  projects: AzureDevopsProject[] = [];
  pipelineService: AzurePipelinesService;
  boardsService: AzureBoardsService;
  projectService: AzureProjectService;
  constructor(private instanceSettings: any) {
    this.url = this.instanceSettings.url;
    this.pipelineService = new AzurePipelinesService(this.instanceSettings);
    this.boardsService = new AzureBoardsService(this.instanceSettings);
    this.projectService = new AzureProjectService(this.instanceSettings);
  }
  query(options: any): Promise<any> {
    const queries: any[] = options.targets.filter((item: any) => {
      return item.hide !== true;
    });
    const promises: any[] = [];
    queries.forEach(q => {
      switch (q.queryType) {
        case 'build_builds':
        case 'build':
          promises.push(this.pipelineService.getBuildBuilds(q.projectId));
          break;
        case 'pipelines_runs':
          promises.push(this.pipelineService.getPipelineRunsByPipelineId(q.projectId, q.pipelineId));
          break;
        case 'release_deployments':
          promises.push(this.pipelineService.getReleaseDeployments(q.projectId));
          break;
        case 'teams':
          promises.push(this.projectService.listTeams(q.projectId));
          break;
        case 'teams_backlogs':
          promises.push(this.boardsService.getBacklogTypesByTeam(q.projectId, q.teamId));
          break;
        default:
          break;
      }
    });
    return Promise.all(promises).then((results: any) => {
      return results;
    });
  }
  listProjects(): Promise<AzureDevopsProject[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/_apis/projects?api-version=6.0-preview.4`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          this.projects = (response.data.value || []).map((result: any) => {
            return new AzureDevopsProject(result);
          });
        }
        return this.projects;
      })
      .catch((ex: any) => {
        console.error(ex);
        return this.projects;
      });
  }
  testConnection(): Promise<any> {
    return new Promise(async (resolve: any, reject: any) => {
      this.listProjects()
        .then(res => {
          if (res && res.length > 0) {
            resolve({ message: `Successfully connected to Azure Devops. ${res.length} projects found.`, status: 'success' });
          } else {
            reject({ message: 'Failed to fetch details from Azure Devops', status: 'error' });
          }
        })
        .catch(ex => {
          reject({ message: 'Failed to fetch details from Azure Devops', status: 'error' });
        });
    });
  }
}
