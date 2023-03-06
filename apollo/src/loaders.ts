import DataLoader from "dataloader";

import CompaniesAPI from "./services/Companies";
import UsersAPI from "./services/Users";
import { Company, User } from "./types";

const userByCompanyLoader = new DataLoader<string, User[]>(async (keys) => {
  const usersByCompanyIds = await new UsersAPI().getUsersByCompanyIds(
    keys as string[]
  );

  return usersByCompanyIds;
});

const companyLoader = new DataLoader<number, Company>(async (keys) => {
  const companies = await new CompaniesAPI().getCompaniesByIds(
    keys as number[]
  );
  const companiesMap: Record<string, Company> = {};
  companies.forEach((company) => {
    companiesMap[company.id] = company;
  });
  return keys.map((key) => companiesMap[key]);
});

export const loaders = {
  userByCompany: userByCompanyLoader,
  company: companyLoader,
};
