import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../../grafana';
import { AzureDevopsInstance } from './../AzureDevopsInstance';
import { AzureDevopsItem } from './../core/AzureDevopsItem';

export class AzureBacklogType extends AzureDevopsItem {
  constructor(options: any) {
    super(options);
  }
}
export class AzureBacklogTypeCtrl extends PureComponent<any, any> {
  state: any = defaults(this.state, { projectId: '', teamId: '', AzureBacklogTypes: [] });
  loadBacklogTypes = () => {
    return new Promise(resolve => {
      const az: AzureDevopsInstance = new AzureDevopsInstance(this.props.datasource.instanceSettings);
      az.boardsService.getBacklogTypesByTeam(this.props.query.projectId || '', this.props.query.teamId || '').then((res: AzureBacklogType[]) => {
        this.setState({
          AzureBacklogTypes: res.map(r => {
            return r.asSelectable();
          }),
        });
        resolve();
      });
    });
  };
  getBacklogTypes() {
    return this.state.AzureBacklogTypes;
  }
  componentWillMount() {
    this.state.projectId = this.props.query.projectId || '';
    this.state.teamId = this.props.query.teamId || '';
    this.loadBacklogTypes();
  }
  componentDidUpdate = (prevProps: any) => {
    if (this.props.query.projectId !== prevProps.query.projectId) {
      const { query, onChange } = this.props;
      this.loadBacklogTypes();
      onChange({ ...query, backlogTypeId: '', backlogTypeName: '' });
    }
    if (this.props.query.teamId !== prevProps.query.teamId) {
      const { query, onChange } = this.props;
      this.loadBacklogTypes();
      onChange({ ...query, backlogTypeId: '', backlogTypeName: '' });
    }
  };
  onBacklogTypeIdChange = (event: SelectableValue) => {
    const { query, onChange } = this.props;
    onChange({ ...query, backlogTypeId: event.value, backlogTypeName: event.label });
  };
  render() {
    const { query } = this.props;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Projects">
                Backlog Type
              </label>
              <Select
                className="width-24"
                options={this.state.AzureBacklogTypes}
                onChange={this.onBacklogTypeIdChange}
                defaultValue={query.backlogTypeId}
                value={
                  this.state.AzureBacklogTypes.find((proj: any) => proj.value === query.backlogTypeId) || {
                    label: query.backlogTypeId,
                    value: query.backlogTypeName,
                  }
                }
                allowCustomValue
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
