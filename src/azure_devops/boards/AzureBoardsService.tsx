import React, { PureComponent } from 'react';
import { doBackendRequest } from './../Backend';
import { AzureDevopsService, AZURE_DEVOPS_SERVICE_TYPES } from './../AzureDevopsService';
import { AzureBacklogType } from './AzureBacklogType';

export class AzureBoardsService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super(AZURE_DEVOPS_SERVICE_TYPES.PIPELINES, 'Boards');
    this.url = this.instanceSettings.url;
  }

  getBacklogTypesByTeam(projectId: string, teamId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/${teamId}/_apis/work/backlogs?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return new AzureBacklogType(result);
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
}
export class AzureBoardsServiceCtrl extends PureComponent<any, any> {
  render() {
    return <div>Azure Boards Service</div>;
  }
}
