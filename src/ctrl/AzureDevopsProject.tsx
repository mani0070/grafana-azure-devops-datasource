import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { AzureDevopsConnection, AzureDevopsProject } from './../AzureDevopsConnection';
import { Select } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';

export class AzureDevopsProjectCtrl extends PureComponent<any, any> {
  state: any = defaults(this.state, { AzureDevopsProjects: [] });

  componentWillMount() {
    const az: AzureDevopsConnection = new AzureDevopsConnection(this.props.datasource.instanceSettings);
    az.getProjects().then((res: AzureDevopsProject[]) => {
      this.setState({
        AzureDevopsProjects: res.map(r => {
          return r.asSelectable();
        }),
      });
    });
  }
  onProjectIdChange = (event: SelectableValue) => {
    const { query, onChange } = this.props;
    onChange({ ...query, projectId: event.value, projectName: event.label });
  };
  render() {
    const { query } = this.props;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Projects">
                Projects
              </label>
              <Select
                className="width-24"
                options={this.state.AzureDevopsProjects}
                onChange={this.onProjectIdChange}
                defaultValue={query.projectId}
                value={
                  this.state.AzureDevopsProjects.find((proj: any) => proj.value === query.projectId) || {
                    label: query.projectId,
                    value: query.projectName,
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
