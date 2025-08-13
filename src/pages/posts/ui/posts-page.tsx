//import { useGetFilteredPosts } from '@entities/posts/model/use-get-filtered-posts';
import { BasePage } from '@widgets/base-page/ui/base-page';
import styled from 'styled-components';

export const PostsPage = () => {
  //const { data, isLoading, error } = useGetFilteredPosts();

  return (
    <BasePage>
      <SContainer></SContainer>
    </BasePage>
  );
};

const SContainer = styled.main`
  width: 100%;
  height: 100%;
`;
