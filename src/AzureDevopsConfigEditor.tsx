import React, { PureComponent } from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData } from '@grafana/data';

interface AzureDevopsOptions extends DataSourceJsonData {}

export type Props = DataSourcePluginOptionsEditorProps<AzureDevopsOptions>;
export class AzureDevopsConfigEditor extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { options, onOptionsChange } = this.props;
    return <DataSourceHttpSettings defaultUrl="https://dev.azure.com/<INSTANCE>" dataSourceConfig={options} onChange={onOptionsChange} />;
  }
}
