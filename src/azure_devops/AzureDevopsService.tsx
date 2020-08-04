import React, { PureComponent } from 'react';
import { Select } from '@grafana/ui';
import { AzureDevopsItem } from './core/AzureDevopsItem';

export const AZURE_DEVOPS_SERVICE_TYPES = {
  BOARDS: `boards`,
  REPOS: 'repos',
  PIPELINES: 'pipelines',
  TEST_PLANS: 'testplans',
  ARTIFACTS: 'artifacts',
};

export class AzureDevopsService extends AzureDevopsItem {
  constructor(id: string, name: string) {
    super({ id, name });
  }
}

export const AZURE_DEVOPS_SERVICES: any[] = [
  new AzureDevopsService(AZURE_DEVOPS_SERVICE_TYPES.PIPELINES, 'Pipelines'),
  new AzureDevopsService(AZURE_DEVOPS_SERVICE_TYPES.BOARDS, 'Boards'),
  new AzureDevopsService(AZURE_DEVOPS_SERVICE_TYPES.REPOS, 'Repos'),
  new AzureDevopsService(AZURE_DEVOPS_SERVICE_TYPES.TEST_PLANS, 'Test Plans'),
  new AzureDevopsService(AZURE_DEVOPS_SERVICE_TYPES.ARTIFACTS, 'Artifacts'),
];

export class AzureDevopsServiceCtrl extends PureComponent<any, any> {
  onServiceTypeChange = (service: any) => {
    const { query, onChange } = this.props;
    onChange({ ...query, serviceType: service.value });
  };
  render() {
    const { query } = this.props;
    const services = AZURE_DEVOPS_SERVICES.map(service => service.asSelectable());
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-12" title="Query Type">
              Service Type
            </label>
            <Select
              className="width-24"
              value={services.find((service: any) => service.value === query.serviceType)}
              options={services}
              defaultValue={query.serviceType}
              onChange={this.onServiceTypeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
