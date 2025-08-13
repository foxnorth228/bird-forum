import { usePostFilterData } from '@entities/posts/model/post-filter-data';
import { PostFilterInput } from '@entities/posts/ui/post-filter-input';
import styled from 'styled-components';

export const PostsFilter = () => {
  const { username, setUsername } = usePostFilterData();
  return (
    <SContainer>
      <PostFilterInput value={username} setValue={setUsername} />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: grid;
  flex-grow: 1;
  width: 100%;
  max-width: 300px;
  min-height: 100%;
  padding: ${(props) => props.theme.spacing(1)};
  background: ${(props) => props.theme.colors.background};
  border-right: ${(props) => props.theme.spacing(0.125)} solid
    ${(props) => props.theme.colors.border};
`;
