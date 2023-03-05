export const resolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUser(id);
    },
    users: async (_, __, { dataSources }) => {
      return dataSources.usersAPI.getUsers();
    },
    company: async (_, { id }, { dataSources }) => {
      return dataSources.companiesAPI.getCompany(id);
    },
    companies: async (_, __, { dataSources }) => {
      return dataSources.companiesAPI.getCompanies();
    },
  },
};
