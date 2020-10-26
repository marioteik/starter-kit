//################# Read

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  ad: Ad;
}

//################# Create

export interface RequestCreate {
  name: string;
  job: string;
}

export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

//################# Update

export interface ResponseUser {
  data: User;
}

export interface RequestUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  updatedAt: Date;
}

//################# Delete
