import React, { PureComponent } from 'react';
import { AzureDevopsService, AZURE_DEVOPS_SERVICE_TYPES } from './../AzureDevopsService';

export class AzureTestPlansService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super(AZURE_DEVOPS_SERVICE_TYPES.TEST_PLANS, 'Test Plans');
    this.url = this.instanceSettings.url;
  }
}
export class AzureTestPlansServiceCtrl extends PureComponent<any, any> {
  render() {
    return <div>Azure Test Plans Service</div>;
  }
}
