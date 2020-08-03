import { AzureDevopsConnection } from './AzureDevopsConnection';

export class AzureDevopsDataSource extends AzureDevopsConnection {
  constructor(instanceSettings: any) {
    super(instanceSettings);
  }
  query(options: any): Promise<any> {
    const queries: any[] = options.targets.filter((item: any) => {
      return item.hide !== true;
    });
    const promises: any[] = [];
    queries
      .filter(q => q.queryType === 'pipelines_runs')
      .forEach(q => {
        promises.push(this.getPipelineRuns(q.projectId, q.pipelineId));
      });
    queries
      .filter(q => q.queryType === 'release_deployments')
      .forEach(q => {
        promises.push(this.getReleaseDeployments(q.projectId));
      });
    queries
      .filter(q => q.queryType === 'build_builds')
      .forEach(q => {
        promises.push(this.getBuildBuilds(q.projectId));
      });
    queries
      .filter(q => q.queryType === 'teams')
      .forEach(q => {
        promises.push(this.getTeamsByProject(q.projectId));
      });
    queries
      .filter(q => q.queryType === 'teams_backlogs')
      .forEach(q => {
        promises.push(this.getBacklogsByTeam(q.projectId, q.teamId));
      });
    return Promise.all(promises).then((results: any) => {
      return results;
    });
  }
}
