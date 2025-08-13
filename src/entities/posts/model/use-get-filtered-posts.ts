import { useGetPostsWithUsersQuery } from '@entities/posts/api/slice';
import { usePostFilterData } from '@entities/posts/model/post-filters-slice';

export const useGetFilteredPosts = () => {
  const { username } = usePostFilterData();
  const { data, error, isLoading } = useGetPostsWithUsersQuery();

  return { data: data?.filter((post) => post.user.name.includes(username)), error, isLoading };
};
