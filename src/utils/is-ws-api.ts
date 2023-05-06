import type { GenericWsApi } from '../types/GenericWsApi';

export const isWsApi = (value: any): value is GenericWsApi =>
  value !== undefined &&
  typeof value === 'object' &&
  'isYaschemaWsApi' in value &&
  (value as { isYaschemaWsApi: any }).isYaschemaWsApi === true;
