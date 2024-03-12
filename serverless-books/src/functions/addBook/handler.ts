import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import Book from '../../models/book';



import schema from './schema';

const addBook: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let newBook = new Book(
    event.body.name,
    event.body.author,
    event.body.year,
    event.body.genre
  );

  return formatJSONResponse({
    event,
  });
};

export const main = middyfy(addBook);
