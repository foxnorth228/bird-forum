import { useGetFilteredPosts } from '@entities/posts/model/use-get-filtered-posts';
import { PostElement } from '@entities/posts/ui/post-element';
import { BounceLoader } from 'react-spinners';
import styled, { useTheme } from 'styled-components';

export const PostsGrid = () => {
  const theme = useTheme();
  const { data, isLoading, error } = useGetFilteredPosts();

  let content = null;

  if (isLoading) {
    content = <BounceLoader color={theme.colors.mark} />;
  } else if (error) {
    content = error.toString();
  } else if (data) {
    content = data
      .sort((a, b) => a.priority - b.priority)
      .map((post) => <PostElement key={post.id} data={post} />);
  } else {
    content = 'No posts found';
  }

  return <SContainer>{content}</SContainer>;
};

const SContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: min-content;
  grid-gap: ${(props) => props.theme.spacing(1)};
  align-content: flex-start;
  justify-content: center;

  width: 100%;
  padding: ${(props) => props.theme.spacing(1)};
`;
