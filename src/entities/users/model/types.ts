export type IRole = 'admin' | 'user';

export interface IUser {
  id: number;
  role: IRole;
  name: string;
  email: string;
  address: string;
  password: string;
  bookmarks: number[];
}
