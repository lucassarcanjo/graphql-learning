import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import UsersAPI from "./services/Users";
import CompaniesAPI from "./services/Companies";

interface ContextValue {
  dataSources: {
    usersAPI: UsersAPI;
    companiesAPI: CompaniesAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    dataSources: {
      usersAPI: new UsersAPI(),
      companiesAPI: new CompaniesAPI(),
    },
  }),
});

console.log(`🚀 Server ready at http://localhost:4000/`);
