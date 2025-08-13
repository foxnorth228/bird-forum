import { useGetPostWithUserCommentsQuery } from '@entities/posts/api/slice';
import { PostElement } from '@entities/posts/ui/post-element';
import { BasePage } from '@shared/ui/base-page';
import { useParams } from 'react-router';
import { BounceLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

export const PostPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostWithUserCommentsQuery(id ?? '0');

  let content = null;

  if (isLoading) {
    content = <BounceLoader color={theme.colors.mark} />;
  } else if (error) {
    content = error.toString();
  } else if (!data) {
    content = 'Post not exists';
  } else {
    content = <PostElement data={data}></PostElement>;
  }

  return <BasePage>{content}</BasePage>;
};
