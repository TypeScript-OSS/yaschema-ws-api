import type { WsApi } from '../WsApi';

export type InferWsResponseCommandsType<T> = T extends WsApi<infer _RequestCommandsT, infer ResponseCommandsT, infer _QueryT>
  ? ResponseCommandsT
  : never;
