# Fundamentals

GraphQL is a data query and manipulation language for APIs. It also can be a server-side runtime that prioritizes giving clients exactly the data they request and no more.

Additionally, API maintainers can add or deprecate fields without impacting existing queries. Developers can build APIs with whatever methods they prefer, and the GraphQL specification will ensure they function in predictable ways to clients.

## Schema Definition Language

The schema definition is the source of truth using types to define what we can fetch from a GraphQL Server. A minimal example can be:

```js
const typeDefs = gql`
  type Query {
    greeting: String
  }
`
```

## Resolver Functions

At the resolvers, we have the functions that are defined to literally resolve a type. In the greeting example we could write:

```js
const resolvers = {
  Query: {
    greeting: () => 'Hello world',
  },
};
```

> 💡 Resolvers need to accurately mirror the type definitions