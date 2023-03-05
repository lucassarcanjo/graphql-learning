export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  companyId: number;
  company: Company;
}

export interface Company {
  id: number;
  name: string;
  address: string;
  users: User[];
}
