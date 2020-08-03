import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps, DataQuery } from '@grafana/data';
import { Select } from '@grafana/ui';
import { Datasource } from './../datasource';
import { AzureDevopsProjectCtrl } from './../ctrl/AzureDevopsProject';
import { AzureDevopsPipelineCtrl } from './../ctrl/AzureDevopsPipeline';
import { AzureDevopsTeamsCtrl } from './../ctrl/AzureDevopsTeams';

const serviceTypes = [
  { label: 'Pipelines', value: 'pipelines' },
  { label: 'Boards', value: 'boards' },
  { label: 'Repositories', value: 'repositories' },
  { label: 'Test Plans', value: 'testPlans' },
  { label: 'Artifacts', value: 'artifacts' },
];
const queryTypes = [
  { label: 'Pipeline Runs', value: 'pipelines_runs' },
  { label: 'Release Deployments', value: 'release_deployments' },
  { label: 'Build Builds', value: 'build_builds' },
  { label: 'Teams', value: 'teams' },
  { label: 'Backlogs', value: 'teams_backlogs' },
  { label: 'WorkItem', value: 'teams_work_items' },
];

export interface AzureDevopsQuery extends DataQuery {
  serviceType?: string;
  queryType?: string;
  projectId?: string;
  projectName?: string;
  pipelineId?: string;
  pipelineName?: string;
  teamId?: string;
  teamName?: string;
}

type Props = QueryEditorProps<Datasource, AzureDevopsQuery>;

interface State {}

export class AzureDevopsQueryEditor extends PureComponent<Props, State> {
  onQueryTypeChange = (service: any) => {
    const { query, onChange } = this.props;
    onChange({ ...query, queryType: service.value });
  };
  onServiceTypeChange = (service: any) => {
    const { query, onChange } = this.props;
    onChange({ ...query, serviceType: service.value });
  };
  render() {
    const query = defaults(this.props.query, { serviceType: 'pipelines', queryType: 'pipelines_runs' });
    let DetailCtrl;
    switch (query.queryType) {
      case 'pipelines_runs':
        if (query && query.serviceType === 'pipelines' && query.projectId) {
          DetailCtrl = <AzureDevopsPipelineCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        }
        break;
      default:
        DetailCtrl = <AzureDevopsTeamsCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
    }
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-12" title="Query Type">
              Service Type
            </label>
            <Select
              className="width-24"
              value={serviceTypes.find((service: any) => service.value === query.serviceType)}
              options={serviceTypes}
              defaultValue={query.serviceType}
              onChange={this.onServiceTypeChange}
            />
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-12" title="Query Type">
              Service Type
            </label>
            <Select
              className="width-24"
              value={queryTypes.find((service: any) => service.value === query.queryType)}
              options={queryTypes}
              defaultValue={query.queryType}
              onChange={this.onQueryTypeChange}
            />
          </div>
        </div>
        <AzureDevopsProjectCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        {DetailCtrl}
      </div>
    );
  }
}
