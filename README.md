# grafana-azure-devops-datasource

Azure Devops Datasource for Grafana. Gets stats from Azure devops into Grafana.

## Work In Progress

NOTE: This is a work in progress and not intended to be used anywhere in production. No warranty or guarantee provided. 

## Template Variables

The Azure Devops data source Plugin provides the following queries you can specify in the Query field in the variable edit view. They allow you to fill a variable’s options list. 

| Name                       | Description                         |
|----------------------------|-------------------------------------|
| Projects()                 | List of Azure Devops Projects       |
| Teams(YourProjectName)     | List of Teams for a Project         |
| Pipelines(YourProjectName) | List of Pipelines for a Project     |

Note: Azure Devops datasource plugin does not support multiple values for templates yet.

## Installation

This plugin is not yet published to grafana. But, still there are multiple ways you can install and use the plugin.

#### Download and extract zip file

Download the zip file from [github](https://github.com/yesoreyeram/grafana-azure-devops-datasource/archive/master.zip) and extract into your grafana plugin folder. Then restart Grafana.

#### Using grafana-cli

If you are using grafana-cli, execute the following command to install the plugin

```
grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-azure-devops-datasource/archive/master.zip plugins install yesoreyeram-azuredevops-datasource
```
#### Using helm chart

If you use help chart to provision grafana, use the following config to install the plugin

```
plugins:
  - https://github.com/yesoreyeram/grafana-azure-devops-datasource/archive/master.zip;yesoreyeram-azuredevops-datasource
```

## Configuration

Configuration of the plugin requires following field.

| Field      | Description |
|------------|-------------|
| url        | URL for the azure devops service. Typically, it will will `https://dev.azure.com/YOUR_INSTNACE_NAME` of `https://YOUR_INSTANCE_NAME.visualstudio.com`. Use one of the mentioned formats |
| Basic Auth | Enabled     |
| User       | The user name of who generated PAT token. This can be any dummy value. Typically, specify `username` for consistency.|
| Password   | PAT Token with reader access |

#### Provisioning via file

If you want to use the grafana provisioning feature, use the following yaml

```
apiVersion: 1

datasources:
- name: <Datasource Name>
  type: yesoreyeram-azuredevops-datasource
  access: proxy
  isDefault: false
  url: <YOUR_AZURE_DEVOPS_INSTANCE_URL>
  basicAuth: true
  basicAuthUser: username
  withCredentials: false
  secureJsonData:
       basicAuthPassword: <PAT Token>
  version: 1
  readOnly: false
```

#### Azure Devops Permissions / PAT Token permissions

Based on what services you want to use in the Plugin, provide corresponding `Read` and `Status` permissions as required. Detailed screenshots and instruction to generate PAT token given [here](https://github.com/yesoreyeram/grafana-azure-devops-datasource/issues/1#issue-670589248) and [there](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page)

## Contribution

Though this plugin is not ready for production use; Feel free to test, create bugs / pull requests.

Co-Contributors are welcome. Reach out me at my twitter handle [@yesoreyeram](https://twitter.com/yesoreyeram) for details.
