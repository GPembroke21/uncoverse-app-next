// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Platform, Event, Interaction } = initSchema(schema);

export {
  Todo,
  Platform,
  Event,
  Interaction
};