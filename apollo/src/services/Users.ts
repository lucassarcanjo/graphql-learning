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
}

export default UsersAPI;
