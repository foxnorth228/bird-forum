import { CommentsGrid } from '@entities/comments/ui/comments-grid';
import { useGetPostWithUserCommentsQuery } from '@entities/posts/api/slice';
import { PostElement } from '@entities/posts/ui/post-element';
import { BasePage } from '@shared/ui/base-page';
import { useParams } from 'react-router';
import { BounceLoader } from 'react-spinners';
import styled, { useTheme } from 'styled-components';

export const PostPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostWithUserCommentsQuery(id ?? '0');

  let content;

  if (isLoading) {
    content = <BounceLoader color={theme.colors.mark} />;
  } else if (error) {
    content = error.toString();
  } else if (!data) {
    content = 'Post not exists';
  } else {
    content = (
      <>
        <PostElement data={data} standalone></PostElement>
        <CommentsGrid data={data.comments} />
      </>
    );
  }

  return (
    <BasePage>
      <SContainer>{content}</SContainer>
    </BasePage>
  );
};

const SContainer = styled.main`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing(1)};
`;
