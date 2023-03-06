import { RESTDataSource } from "@apollo/datasource-rest";
import { User } from "../types";

class UsersAPI extends RESTDataSource {
  override baseURL = "http://localhost:3005";

  async getUser(id: string) {
    return this.get<User>(`/users/${id}`);
  }

  async getUsers() {
    return this.get<User[]>("/users");
  }

  async getUsersByCompanyIds(ids: string[]) {
    return this.get<User[][]>(`/users/company?ids=${ids.join(",")}`);
  }

  async getUsersByIds(ids: string[]) {
    return this.get<User[]>(`/users?ids=${ids.join(",")}`);
  }
}

export default UsersAPI;
