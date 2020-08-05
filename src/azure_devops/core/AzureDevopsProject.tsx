import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../../grafana';
import { doBackendRequest } from './../Backend';
import { AzureDevopsInstance } from './../AzureDevopsInstance';
import { AzureDevopsItem } from './AzureDevopsItem';
import { AzureDevopsTeam } from './AzureDevopsTeam';
import { AzureDevopsService } from './../AzureDevopsService';

export class AzureDevopsProject extends AzureDevopsItem {
  constructor(options: any) {
    super({ id: options.id, name: options.name });
  }
}
export class AzureProjectService extends AzureDevopsService {
  url: string;
  constructor(private instanceSettings: any) {
    super('project', 'Project');
    this.url = this.instanceSettings.url;
  }  
  listTeams(projectId: string): Promise<any[]> {
    return doBackendRequest(
      {
        method: 'GET',
        url: this.url + `/_apis/projects/${projectId}/teams?api-version=6.0-preview.3`,
      },
      2
    )
      .then((response: any) => {
        if (response && response.data && response.data.value) {
          return (response.data.value || []).map((result: any) => {
            return new AzureDevopsTeam(result);
          });
        }
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }
}
export class AzureDevopsProjectCtrl extends PureComponent<any, any> {
  state: any = defaults(this.state, { AzureDevopsProjects: [] });
  componentWillMount() {
    const az: AzureDevopsInstance = new AzureDevopsInstance(this.props.datasource.instanceSettings);
    az.listProjects().then((res: AzureDevopsProject[]) => {
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
