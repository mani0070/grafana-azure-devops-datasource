import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../../grafana';
import { AzureDevopsItem } from './AzureDevopsItem';
import { AzureDevopsInstance } from './../AzureDevopsInstance';

export class AzureDevopsTeam extends AzureDevopsItem {
  constructor(options: any) {
    super(options);
  }
}
export class AzureDevopsTeamCtrl extends PureComponent<any, any> {
  state: any = defaults(this.state, { projectId: '', Teams: [] });
  loadTeams = () => {
    return new Promise(resolve => {
      const az: AzureDevopsInstance = new AzureDevopsInstance(this.props.datasource.instanceSettings);
      az.listTeamsByProject(this.props.query.projectId || '').then((res: AzureDevopsTeam[]) => {
        this.setState({
          Teams: res.map(r => {
            return r.asSelectable();
          }),
        });
        resolve();
      });
    });
  };
  componentWillMount() {
    this.state.projectId = this.props.query.projectId || '';
    this.loadTeams();
  }
  componentDidUpdate = (prevProps: any) => {
    if (this.props.query.projectId !== prevProps.query.projectId) {
      const { query, onChange } = this.props;
      this.loadTeams();
      onChange({ ...query, teamId: '', teamName: '' });
    }
  };
  onTeamIdChange = (event: SelectableValue) => {
    const { query, onChange } = this.props;
    onChange({ ...query, teamId: event.value, teamName: event.label });
  };
  render() {
    const { query } = this.props;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Team">
                Team
              </label>
              <Select
                className="width-24"
                options={this.state.Teams}
                onChange={this.onTeamIdChange}
                defaultValue={query.teamId}
                value={
                  this.state.Teams.find((proj: any) => proj.value === query.teamId) || {
                    label: query.teamId,
                    value: query.teamName,
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
