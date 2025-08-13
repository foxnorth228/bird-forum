export type IRole = 'admin' | 'user';

export interface IUser {
  id: string;
  role: IRole;
  name: string;
  email: string;
  address: string;
  password: string;
  bookmarks: string[];
}
