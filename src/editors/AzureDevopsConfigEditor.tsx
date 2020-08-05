import React, { PureComponent, ChangeEvent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData } from './../grafana';

interface AzureDevopsOptions extends DataSourceJsonData {
  url?: string;
}
interface AzureDevopsDatasourceSecureJsonData {
  basicAuthPassword?: string;
}
type Props = DataSourcePluginOptionsEditorProps<AzureDevopsOptions>;
interface State {}

export class AzureDevopsConfigEditor extends PureComponent<Props, State> {
  onAzureDevopsURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({ ...options, url: event.target.value });
  };
  onPATTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonData: {
        basicAuthPassword: event.target.value,
      },
    });
  };
  onResetPATToken = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        basicAuthPassword: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        basicAuthPassword: '',
      },
    });
  };
  render() {
    const { options } = this.props;
    options.basicAuth = true;
    options.basicAuthUser = 'username';
    const { secureJsonFields } = options;
    const secureJsonData = (options.secureJsonData || {}) as AzureDevopsDatasourceSecureJsonData;
    return (
      <>
        <h3 className="page-heading">Azure Devops Settings</h3>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-11" title="Azure Devops URL">
              Azure Devops URL
            </label>
            <input
              className="gf-form-input width-20"
              type="text"
              onChange={this.onAzureDevopsURLChange}
              value={options.url || ''}
              placeholder="https://dev.azure.com/YOUR_INSTANCE_NAME"
            ></input>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-11" title="API Key">
              PAT Token
            </label>
            {((secureJsonFields && secureJsonFields.basicAuthPassword) as boolean) ? (
              <>
                <label className="gf-form-label width-20">Configured</label>
                <span className="gf-form-button btn btn-secondary width-6" onClick={this.onResetPATToken}>
                  Reset
                </span>
              </>
            ) : (
              <input
                type="password"
                value={secureJsonData.basicAuthPassword || ''}
                className="gf-form-input width-20"
                onChange={this.onPATTokenChange}
              ></input>
            )}
          </div>
        </div>
      </>
    );
  }
}
