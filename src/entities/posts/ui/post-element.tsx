import { IPostUser } from '@entities/posts/model/types';
import styled from 'styled-components';

interface IPostElement {
  data: IPostUser;
}

export const PostElement = ({ data }: IPostElement) => {
  console.log(data);
  return (
    <SContainer>
      <SHeader />
      <SContent></SContent>
      <SActions></SActions>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const SHeader = styled.div``;
const SContent = styled.div``;
const SActions = styled.div``;
