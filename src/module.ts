import { DataSourcePlugin } from './grafana';
import { Datasource } from './datasource';
import { AzureDevopsConfigEditor } from './editors/AzureDevopsConfigEditor';
import { AzureDevopsQueryEditor } from './editors/AzureDevopsQueryEditor';
import { AzureDevopsAnnotationsEditor } from './editors/AzureDevopsAnnotationsEditor';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigEditor(AzureDevopsConfigEditor)
  .setQueryEditor(AzureDevopsQueryEditor)
  .setAnnotationQueryCtrl(AzureDevopsAnnotationsEditor);
