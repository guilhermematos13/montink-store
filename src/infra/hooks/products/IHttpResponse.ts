export type IHttpResponse<T = unknown> = {
  statusCode: number;
  body: T;
};
