import { DataSourcePlugin } from '@grafana/data';
import { Datasource } from './datasource';
import { AzureDevopsConfigCtrl } from './config/config_ctrl';
import { AzureDevopsQueryEditor } from './AzureDevopsQueryEditor';
import { AzureDevopsAnnotationsEditor } from './AzureDevopsAnnotationsEditor';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigCtrl(AzureDevopsConfigCtrl)
  .setQueryEditor(AzureDevopsQueryEditor)
  .setAnnotationQueryCtrl(AzureDevopsAnnotationsEditor);
