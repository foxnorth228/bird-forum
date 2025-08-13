import { useGetFilteredPosts } from '@entities/posts/model/use-get-filtered-posts';
import { PostElement } from '@entities/posts/ui/post-element';
import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

export const PostsGrid = () => {
  const { data, isLoading, error } = useGetFilteredPosts();

  let content = null;

  if (isLoading) {
    content = <SBounceLoader />;
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: min-content;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

const SBounceLoader = styled(BounceLoader)`
  color: ${(props) => props.theme.colors.mark};
`;
