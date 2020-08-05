import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select } from './../../grafana';
import { doBackendRequest } from './../Backend';
import { AzureDevopsPipeline, AzureDevopsPipelineCtrl } from './AzurePipeline';
import { AzureBuild } from './AzureBuild';
import { AzureDevopsService, AZURE_DEVOPS_SERVICE_TYPES } from './../AzureDevopsService';

const queryTypes = [
  { label: 'Builds', value: 'build_builds' },
  { label: 'Pipeline Runs', value: 'pipelines_runs' },
];

export class AzurePipelinesService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super(AZURE_DEVOPS_SERVICE_TYPES.PIPELINES, 'Pipelines');
    this.url = this.instanceSettings.url;
  }
  getPipelinesByProjectId(projectId: string): Promise<AzureDevopsPipeline[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/pipelines?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return new AzureDevopsPipeline(result);
          });
        }
        return [];
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  getPipelineRunsByPipelineId(projectId: string, pipelineId: string): Promise<AzureBuild[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/pipelines/${pipelineId}/runs?api-version=6.0-preview.1`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: AzureBuild) => {
            return result;
          });
        }
        return [];
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
  getBuildBuilds(projectId: string): Promise<AzureBuild[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/${projectId}/_apis/build/builds?api-version=6.0-preview.6`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: AzureBuild) => {
            return result;
          });
        }
        return [];
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
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return result;
          });
        }
        return [];
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
}

export class AzurePipelineServiceCtrl extends PureComponent<any, any> {
  onQueryTypeChange = (service: any) => {
    const { query, onChange } = this.props;
    onChange({ ...query, queryType: service.value });
  };
  render() {
    const query = defaults(this.props.query, { serviceType: 'pipelines', queryType: 'build_builds' });
    let detailCtrl;
    switch (query.queryType) {
      case 'pipelines_runs':
        detailCtrl = (
          <>
            <AzureDevopsPipelineCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
          </>
        );
        break;
    }
    return (
      <>
        <label className="gf-form-label width-12" title="Query Type">
          Query Type
        </label>
        <Select
          className="width-24"
          value={queryTypes.find((service: any) => service.value === query.queryType)}
          options={queryTypes}
          defaultValue={query.queryType}
          onChange={this.onQueryTypeChange}
        />
        {detailCtrl}
      </>
    );
  }
}
