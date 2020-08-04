import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { Datasource, AzureDevopsQueryStructure } from './../datasource';
import { AzureDevopsServiceCtrl, AZURE_DEVOPS_SERVICE_TYPES } from './../azure_devops/AzureDevopsService';
import { AzureDevopsProjectCtrl } from '../azure_devops/core/AzureDevopsProject';

import { AzureBoardsServiceCtrl } from './../azure_devops/boards/AzureBoardsService';
import { AzurePipelineServiceCtrl } from './../azure_devops/pipelines/AzurePipelinesService';
import { AzureReposServiceCtrl } from './../azure_devops/repos/AzureReposService';
import { AzureTestPlansServiceCtrl } from './../azure_devops/test_plans/AzureTestPlansService';
import { AzureArtifactsServiceCtrl } from './../azure_devops/artifacts/AzureArtifactsService';

type Props = QueryEditorProps<Datasource, AzureDevopsQueryStructure>;

interface State {}

export class AzureDevopsQueryEditor extends PureComponent<Props, State> {
  render() {
    const query = defaults(this.props.query, { serviceType: 'pipelines', queryType: 'build_builds' });
    let ServiceCtrl;
    switch (query.serviceType) {
      case AZURE_DEVOPS_SERVICE_TYPES.PIPELINES:
        ServiceCtrl = <AzurePipelineServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
      case AZURE_DEVOPS_SERVICE_TYPES.BOARDS:
        ServiceCtrl = <AzureBoardsServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
      case AZURE_DEVOPS_SERVICE_TYPES.ARTIFACTS:
        ServiceCtrl = <AzureArtifactsServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
      case AZURE_DEVOPS_SERVICE_TYPES.TEST_PLANS:
        ServiceCtrl = <AzureTestPlansServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
      case AZURE_DEVOPS_SERVICE_TYPES.REPOS:
        ServiceCtrl = <AzureReposServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <AzureDevopsServiceCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
            <AzureDevopsProjectCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
          </div>
        </div>
        {ServiceCtrl}
      </div>
    );
  }
}
