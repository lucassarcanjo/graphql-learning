import { RESTDataSource } from "@apollo/datasource-rest";
import { Company } from "../types";

class CompaniesAPI extends RESTDataSource {
  override baseURL = "http://localhost:3005";

  async getCompany(id: string) {
    return this.get<Company>(`/companies/${id}`);
  }

  async getCompanies() {
    return this.get<Company[]>("/companies");
  }

  async getCompaniesByIds(ids: number[]) {
    return this.get<Company[]>(`/companies?ids=${ids.join(",")}`);
  }
}

export default CompaniesAPI;
