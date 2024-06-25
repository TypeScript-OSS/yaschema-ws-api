import { makeWsApi } from '../../type-makers/make-ws-api.js';
import { findAllWsApisInRoot } from '../find-all-ws-apis-in-root.js';

const api1 = makeWsApi({
  routeType: 'test',
  schemas: {
    requests: {},
    responses: {}
  },
  url: '/test1'
});
const api2 = makeWsApi({
  routeType: 'test',
  schemas: {
    requests: {},
    responses: {}
  },
  url: '/test2'
});

describe('findAllApisInRoot', () => {
  it('shouldWork', () => {
    expect(findAllWsApisInRoot({ api1, api2 })).toMatchObject([api1, api2]);
    expect(findAllWsApisInRoot({ apis: { api1, api2 } })).toMatchObject([api1, api2]);
  });
});
