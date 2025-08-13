import { IComment } from '@entities/comments/model/types';
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

export interface IPostUserComments extends IPostUser {
  comments: IComment[];
}
