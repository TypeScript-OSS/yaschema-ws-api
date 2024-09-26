import type { AnyQuery } from 'yaschema-api';

import type { AnyCommands } from './AnyCommands';
import type { WsApi } from './WsApi';

export type GenericWsApi = WsApi<AnyCommands, AnyCommands, AnyQuery>;
