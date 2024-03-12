import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';
import Book from '../../models/book';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'addBook',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
