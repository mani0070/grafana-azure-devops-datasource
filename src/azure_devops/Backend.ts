import { getBackendSrv } from './../grafana';

export const doBackendRequest = (requestObject: any, maxRetries = 1): Promise<any> => {
  return getBackendSrv()
    .datasourceRequest(requestObject)
    .catch((error: any) => {
      if (maxRetries > 0) {
        return doBackendRequest(requestObject, maxRetries - 1);
      } else {
        console.error(`Error while retrieving data from ${requestObject.url}`, error);
        return {};
      }
    });
};
