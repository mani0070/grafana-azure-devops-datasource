import React, { PureComponent } from 'react';
import { QueryEditorProps, DataQuery } from '@grafana/data';
import { Datasource } from './../datasource';

export interface AzureDevopsQuery extends DataQuery {}

type Props = QueryEditorProps<Datasource, AzureDevopsQuery>;

interface State {}

export class AzureDevopsAnnotationsEditor extends PureComponent<Props, State> {
  render() {
    return <div>Azure Devops Annotations Editor</div>;
  }
}
