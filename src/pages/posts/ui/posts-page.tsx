import { useGetPostsQuery } from '@entities/posts/model/slice';

export const PostsPage = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  console.log(data, error, isLoading);

  return <div>Posts</div>;
};
