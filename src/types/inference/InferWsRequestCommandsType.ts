import type { WsApi } from '../WsApi';

export type InferWsRequestCommandsType<T> = T extends WsApi<infer RequestCommandsT, infer _ResponseCommandsT, infer _QueryT>
  ? RequestCommandsT
  : never;
