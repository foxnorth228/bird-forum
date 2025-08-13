import { IUser } from '@entities/users/model/types';

export interface IPost {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  likes: string[];
  dislikes: string[];
  priority: number;
}

export interface IPostUser extends IPost {
  user: IUser;
}
