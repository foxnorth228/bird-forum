import { IUser } from '@entities/users/model/types';

export interface IPost {
  id: number;
  userId: number;
  text: string;
  createdAt: string;
  likes: number[];
  dislikes: number[];
  priority: number;
}

export interface IPostUser {
  id: number;
  user: IUser;
  text: string;
  createdAt: string;
  likes: number[];
  dislikes: number[];
  priority: number;
}
