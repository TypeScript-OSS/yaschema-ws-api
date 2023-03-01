import type { AnyCommands } from './AnyCommands';
import type { AnyQuery } from './AnyQuery';
import type { WsApi } from './WsApi';

export type GenericWsApi = WsApi<AnyCommands, AnyCommands, AnyQuery>;
