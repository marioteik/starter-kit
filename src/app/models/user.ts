export interface IUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  type: string;
  followers: number;
  following: number;
  site_admin: boolean;
  location: string;
  created_at: string;
  updated_at: string;
}
