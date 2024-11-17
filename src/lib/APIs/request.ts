import { ensureHost } from "$lib/utils/utils";

enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

function request<T>(
  endpoint: string, 
  config: RequestInit = {},
  overrideHandler: Function | undefined = undefined,
  method: RequestMethod = RequestMethod.GET, 
): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(ensureHost(endpoint), {
      ...defaultOptions,
      ...config,
      method
    })
      .then(response => {
        if (overrideHandler) return overrideHandler();
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

export default request;