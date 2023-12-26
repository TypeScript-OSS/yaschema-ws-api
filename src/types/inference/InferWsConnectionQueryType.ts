import type { WsApi } from '../WsApi';

export type InferWsConnectionQueryType<T> = T extends WsApi<infer _RequestCommandsT, infer _ResponseCommandsT, infer QueryT>
  ? QueryT
  : never;
