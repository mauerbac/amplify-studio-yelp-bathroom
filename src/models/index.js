// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bathrooms } = initSchema(schema);

export {
  Bathrooms
};