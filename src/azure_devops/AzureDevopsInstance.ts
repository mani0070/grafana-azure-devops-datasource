import { doBackendRequest } from './Backend';
import { AzureDevopsProject } from './core/AzureDevopsProject';
import { AzureDevopsTeam } from './core/AzureDevopsTeam';
import { AzurePipelinesService } from './pipelines/AzurePipelinesService';
import { AzureBoardsService } from './boards/AzureBoardsService';

export class AzureDevopsInstance {
  url: string;
  projects: AzureDevopsProject[] = [];
  pipelineService: AzurePipelinesService;
  boardsService: AzureBoardsService;
  constructor(private instanceSettings: any) {
    this.url = this.instanceSettings.url;
    this.pipelineService = new AzurePipelinesService(this.instanceSettings);
    this.boardsService = new AzureBoardsService(this.instanceSettings);
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
          promises.push(this.listTeamsByProject(q.projectId));
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
  listTeamsByProject(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/_apis/projects/${projectId}/teams?api-version=6.0-preview.3`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return new AzureDevopsTeam(result);
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  testConnection(): Promise<any> {
    return new Promise(async (resolve: any, reject: any) => {
      this.listProjects()
        .then(res => {
          resolve({ message: `Successfully connected to Azure Devops. ${res.length} projects found.`, status: 'success' });
        })
        .catch(ex => {
          reject({ message: 'Failed to fetch details from Azure Devops', status: 'error' });
        });
    });
  }
}
