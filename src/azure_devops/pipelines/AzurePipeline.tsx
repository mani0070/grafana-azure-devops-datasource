import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../../grafana';
import { AzureDevopsInstance } from './../AzureDevopsInstance';
import { AzureDevopsItem } from './../core/AzureDevopsItem';

export class AzureDevopsPipeline extends AzureDevopsItem {
  constructor(options: any) {
    super(options);
  }
}
export class AzureDevopsPipelineCtrl extends PureComponent<any, any> {
  state: any = defaults(this.state, { AzureDevopsPipelines: [] });
  loadPipelines = () => {
    return new Promise(resolve => {
      const az: AzureDevopsInstance = new AzureDevopsInstance(this.props.datasource.instanceSettings);
      az.pipelineService.getPipelinesByProjectId(this.props.query.projectId || '').then((res: AzureDevopsPipeline[]) => {
        this.setState({
          AzureDevopsPipelines: res.map(r => {
            return r.asSelectable();
          }),
        });
        resolve();
      });
    });
  };
  componentWillMount() {
    this.loadPipelines();
  }
  componentDidUpdate = (prevProps: any) => {
    if (this.props.query.projectId !== prevProps.query.projectId) {
      const { query, onChange } = this.props;
      this.loadPipelines();
      onChange({ ...query, pipelineId: '', pipelineName: '' });
    }
  };
  onPipelineIdChange = (event: SelectableValue) => {
    const { query, onChange } = this.props;
    onChange({ ...query, pipelineId: event.value, pipelineName: event.label });
  };
  render() {
    const { query } = this.props;
    return (
      <>
        <label className="gf-form-label width-12" title="Projects">
          Pipeline Name
        </label>
        <Select
          className="width-24"
          options={this.state.AzureDevopsPipelines}
          onChange={this.onPipelineIdChange}
          defaultValue={query.pipelineId}
          value={
            this.state.AzureDevopsPipelines.find((proj: any) => proj.value === query.pipelineId) || {
              label: query.pipelineId,
              value: query.pipelineName,
            }
          }
          allowCustomValue
        />
      </>
    );
  }
}
