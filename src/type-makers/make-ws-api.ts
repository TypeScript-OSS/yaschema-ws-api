import type { AnyCommands } from '../types/AnyCommands';
import type { AnyQuery } from '../types/AnyQuery';
import type { WsApi } from '../types/WsApi';

/**
 * If name is omitted, it will be generated as:
 * ```
 * `WS ${api.routeType} ${api.url}`
 * ```
 */
export const makeWsApi = <RequestCommandsT extends AnyCommands, ResponseCommandsT extends AnyCommands, QueryT extends AnyQuery>(
  api: Omit<WsApi<RequestCommandsT, ResponseCommandsT, QueryT>, 'isYaschemaApi' | 'isYaschemaWsApi' | 'name'> & { name?: string }
): WsApi<RequestCommandsT, ResponseCommandsT, QueryT> => ({
  ...api,
  name: api.name ?? `WS ${api.routeType} ${api.url}`,
  isYaschemaApi: true,
  isYaschemaWsApi: true
});
