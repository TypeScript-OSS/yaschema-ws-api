import type { GenericWsApi } from '../types/GenericWsApi';
import { isWsApi } from './is-ws-api.js';

export const findAllWsApisInRoot = (root: any): GenericWsApi[] => internalFindAllWsApisInRoot(root, 0, []);

// Helpers

const MAX_DEPTH = 10;

const internalFindAllWsApisInRoot = (root: any, depth: number, output: GenericWsApi[]): GenericWsApi[] => {
  if (depth >= MAX_DEPTH || root === null || root === undefined || Array.isArray(root) || typeof root !== 'object') {
    return output;
  }

  if (isWsApi(root)) {
    output.push(root);
    return output;
  }

  for (const value of Object.values(root as object)) {
    internalFindAllWsApisInRoot(value, depth + 1, output);
  }
  return output;
};
