# yaschema-ws-api

[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Web socket API support for yaschema.

## Basic Example

```typescript
export const stream = makeWsApi({
  routeType: 'stream',
  url: '/stream',
  requests: {
    ping: schema.object({ echo: schema.string().allowEmptyString().optional() }).optional(),
    hello: schema.any().optional()
  },
  responses: {
    pong: schema.object({
      body: schema.string()
    }),
    hello: schema.object({
      body: schema.string()
    })
  }
});
```

## Thanks

Thanks for checking it out.  Feel free to create issues or otherwise provide feedback.

[API Docs](https://passfolio.github.io/yaschema-ws-api/)

Be sure to check out our other [Open Source @ Passfolio](https://github.com/Passfolio) projects as well.

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/yaschema-ws-api.svg

[downloads]: https://www.npmjs.com/package/yaschema-ws-api

[size-badge]: https://img.shields.io/bundlephobia/minzip/yaschema-ws-api.svg

[size]: https://bundlephobia.com/result?p=yaschema-ws-api
