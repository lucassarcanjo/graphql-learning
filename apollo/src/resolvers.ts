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
  User: {
    company: async (user, _, { dataSources }) => {
      return dataSources.companiesAPI.getCompany(user.companyId);
    },
  },
  Company: {
    users: async (company, _, { dataSources }) => {
      return dataSources.usersAPI.getUsersByCompanyId(company.id);
    },
  },
};
