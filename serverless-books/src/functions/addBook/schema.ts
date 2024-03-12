export default {
  type: "object",
  properties: {
    name: { type: 'string' },
    author: {type: 'string'},
    genre: {type: 'string'},
    year: {type: 'string'}
  },
  required: ['name', 'author', 'genre', 'year']
} as const;
