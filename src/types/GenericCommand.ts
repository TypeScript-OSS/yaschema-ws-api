import { schema } from 'yaschema';

export const genericCommandSchema = schema.object({
  command: schema.string(),
  body: schema.any()
});
export type GenericCommand = typeof genericCommandSchema.valueType;
