export interface IPost {
  id: number;
  userId: number;
  text: string;
  createdAt: string;
  likes: number[];
  dislikes: number[];
  priority: number;
}
