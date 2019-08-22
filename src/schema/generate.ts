import path from 'path';
import { makeSchema } from 'nexus';
import * as types from './types';

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), './schema.graphql'),
    typegen: path.join(process.cwd(), './types/schema.d.ts'),
  },
});

console.log('\x1b[35m%s\x1b[0m %s', 'GraphQL', 'schema updated!');
