import React, { PureComponent } from 'react';
import { AzureDevopsService, AZURE_DEVOPS_SERVICE_TYPES } from './../AzureDevopsService';

export class AzureReposService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super(AZURE_DEVOPS_SERVICE_TYPES.REPOS, 'Repos');
    this.url = this.instanceSettings.url;
  }
}
export class AzureReposServiceCtrl extends PureComponent<any, any> {
  render() {
    return <div>Azure Repos Service</div>;
  }
}
