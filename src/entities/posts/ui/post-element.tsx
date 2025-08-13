import { IPostUser } from '@entities/posts/model/types';
import { Dislikes } from '@features/posts/ui/dislike';
import { Likes } from '@features/posts/ui/like';
import styled from 'styled-components';

interface IPostElement {
  data: IPostUser;
}

export const PostElement = ({ data }: IPostElement) => {
  return (
    <SContainer>
      <SHeader>
        <SHeaderText>by {data.user.name}</SHeaderText>
        <SHeaderText>{new Date(data.createdAt).toDateString()}</SHeaderText>
      </SHeader>
      <SContent>{data.text}</SContent>
      <SActions>
        <Likes id={data.id} likes={data.likes} dislikes={data.dislikes} />
        <Dislikes id={data.id} likes={data.likes} dislikes={data.dislikes} />
      </SActions>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing(1)};
  border: ${(props) => props.theme.rounded(0.5)} solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.rounded(2)};
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SHeaderText = styled.span`
  font-size: ${(props) => props.theme.spacing(1.5)};
`;

const SContent = styled.div``;

const SActions = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: 1fr min-content;
`;
