import { DataSourcePlugin } from '@grafana/data';
import { Datasource } from './datasource';
import { AzureDevopsConfigEditor } from './AzureDevopsConfigEditor';
import { AzureDevopsQueryEditor } from './AzureDevopsQueryEditor';
import { AzureDevopsAnnotationsEditor } from './AzureDevopsAnnotationsEditor';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigEditor(AzureDevopsConfigEditor)
  .setQueryEditor(AzureDevopsQueryEditor)
  .setAnnotationQueryCtrl(AzureDevopsAnnotationsEditor);
