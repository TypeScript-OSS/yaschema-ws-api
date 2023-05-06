import type { Schema } from 'yaschema';
import type { Api } from 'yaschema-api';

import type { AnyCommands } from './AnyCommands';
import type { AnyQuery } from './AnyQuery';

/** A generic WebSocket API description */
export interface WsApi<RequestCommandsT extends AnyCommands, ResponseCommandsT extends AnyCommands, QueryT extends AnyQuery> extends Api {
  isYaschemaWsApi: true;

  /** The URL for accessing this API, which may be relative to a URL base configuring for the `routeType`.  Use `{…}` syntax to mark
   * parameters, as you might with Express. */
  url: string;

  schemas: {
    connection?: {
      query?: Schema<QueryT>;
    };

    requests: RequestCommandsT;
    responses: ResponseCommandsT;
  };
}
