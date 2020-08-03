import { getBackendSrv } from '@grafana/runtime';

export class AzureDevopsProject {
  name: string;
  id: string;
  description: string;
  constructor(options: any) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }
  asSelectable() {
    return {
      value: this.id,
      label: this.name,
    };
  }
}
export class AzureDevopsPipeline {
  name: string;
  id: string;
  description: string;
  constructor(options: any) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }
  asSelectable() {
    return {
      value: this.id,
      label: this.name,
    };
  }
}
export class AzureDevopsTeam {
  name: string;
  id: string;
  description: string;
  constructor(options: any) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }
  asSelectable() {
    return {
      value: this.id,
      label: this.name,
    };
  }
}
export class AzureBacklogItem {
  name: string;
  id: string;
  description: string;
  constructor(options: any) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }
  asSelectable() {
    return {
      value: this.id,
      label: this.name,
    };
  }
}
const doBackendRequest = (requestObject: any, maxRetries = 1): Promise<any> => {
  return getBackendSrv()
    .datasourceRequest(requestObject)
    .catch((error: any) => {
      if (maxRetries > 0) {
        return doBackendRequest(requestObject, maxRetries - 1);
      } else {
        console.error(`Error while retrieving data from ${requestObject.url}`, error);
        return {};
      }
    });
};
export class AzureDevopsConnection {
  url: string;
  private projects: AzureDevopsProject[] = [];
  constructor(private instanceSettings: any) {
    this.url = this.instanceSettings.url;
  }
  getProjects(): Promise<AzureDevopsProject[]> {
    if (this.projects.length > 0) {
      return new Promise(resolve => {
        resolve(this.projects);
      });
    } else {
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
  }
  getPipelines(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/pipelines?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          this.projects = (response.data.value || []).map((result: any) => {
            return new AzureDevopsPipeline(result);
          });
        }
        return this.projects;
      })
      .catch((ex: any) => {
        console.error(ex);
        return this.projects;
      });
  }
  getPipelineRuns(projectId: string, pipelineId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/pipelines/${pipelineId}/runs?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return result;
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  getReleaseDeployments(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/release/deployments?api-version=6.0-preview.2`,
      },
      2
    )
      .then((response: any) => {
        console.log(response);
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return result;
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  getBuildBuilds(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/build/builds?api-version=6.0-preview.6`,
      },
      2
    )
      .then((response: any) => {
        console.log(response);
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return result;
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  getTeamsByProject(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/_apis/projects/${projectId}/teams?api-version=6.0-preview.3`,
      },
      2
    )
      .then((response: any) => {
        console.log(response);
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
  getBacklogsByTeam(projectId: string, teamId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/${teamId}/_apis/work/backlogs?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        console.log(response);
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return new AzureBacklogItem(result);
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
      this.getProjects()
        .then(res => {
          resolve({ message: `Successfully Connected to Azure Devops. ${res.length} projects found.`, status: 'success' });
        })
        .catch(ex => {
          reject({ message: 'Failed to fetch details from Azure Devops', status: 'error' });
        });
    });
  }
}
