import React, { PureComponent } from 'react';
import { AzureDevopsService, AZURE_DEVOPS_SERVICE_TYPES } from './../AzureDevopsService';

export class AzureArtifactsService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super(AZURE_DEVOPS_SERVICE_TYPES.ARTIFACTS, 'Artifacts');
    this.url = this.instanceSettings.url;
  }
}
export class AzureArtifactsServiceCtrl extends PureComponent<any, any> {
  render() {
    return <div>Azure Artifacts Service</div>;
  }
}
