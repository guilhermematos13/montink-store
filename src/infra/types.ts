interface RequestData<T, D> {
  isLoading: boolean;
  data: T | null;
  error: D | null;
}

interface IHttpResponse<T = unknown> {
  statusCode: number;
  body: T;
}

export type { RequestData, IHttpResponse };
