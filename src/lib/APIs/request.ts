const HOST_URL = __API_BASE_URL__;

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

function getUrl(endpoint: string): string {
  return encodeURI(`${HOST_URL}/${endpoint}`);
}

function request<T>(
  endpoint: string, 
  config: RequestInit = {},
  method: RequestMethod = RequestMethod.GET, 
): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(getUrl(endpoint), {
      ...defaultOptions,
      ...config,
      method
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

export default request;