export const resolvers = {
  Query: {
    user: async (_, { id }, { loaders }) => {
      return loaders.user.load(id);
    },
    users: async (_, __, { dataSources }) => {
      return dataSources.usersAPI.getUsers();
    },
    company: async (_, { id }, { loaders }) => {
      return loaders.company.load(id);
    },
    companies: async (_, __, { dataSources }) => {
      return dataSources.companiesAPI.getCompanies();
    },
  },
  User: {
    company: async (user, _, { loaders }) => {
      return loaders.company.load(user.companyId);
    },
  },
  Company: {
    users: async (company, _, { loaders }) => {
      return loaders.userByCompany.load(company.id);
    },
  },
};
