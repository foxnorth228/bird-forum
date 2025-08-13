import { PostsFilter } from '@entities/posts/ui/posts-filter';
import { PostsGrid } from '@entities/posts/ui/posts-grid';
import { BasePage } from '@widgets/base-page/ui/base-page';
import styled from 'styled-components';

export const PostsPage = () => {
  return (
    <BasePage>
      <SContainer>
        <PostsFilter />
        <PostsGrid />
      </SContainer>
    </BasePage>
  );
};

const SContainer = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
`;
