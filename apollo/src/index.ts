import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import UsersAPI from "./services/Users";
import CompaniesAPI from "./services/Companies";
import DataLoader from "dataloader";
import { Company, User } from "./types";
import { loaders } from "./loaders";

interface ContextValue {
  loaders: {
    userByCompany: DataLoader<string, User[]>;
    company: DataLoader<number, Company>;
  };
  dataSources?: {
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
    loaders,
  }),
});

console.log(`🚀 Server ready at http://localhost:4000/`);
