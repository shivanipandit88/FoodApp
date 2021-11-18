// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Restaurant, AddMenu } = initSchema(schema);

export {
  Restaurant,
  AddMenu
};