import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
    companyId: Int!
    company: Company!
  }

  type Company {
    id: Int!
    name: String!
    address: String!
    users: [User!]!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!

    company(id: Int!): Company
    companies: [Company!]!
  }
`;
