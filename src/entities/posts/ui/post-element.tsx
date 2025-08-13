import { IPostUser } from '@entities/posts/model/types';
import { AddToFavorites } from '@features/posts/ui/add-to-fav';
import { DeletePostButton } from '@features/posts/ui/delete-post-button';
import { Dislikes } from '@features/posts/ui/dislike';
import { Likes } from '@features/posts/ui/like';
import { Link } from 'react-router';
import styled from 'styled-components';

interface IPostElement {
  data: IPostUser;
  standalone?: boolean;
}

export const PostElement = ({ data, standalone }: IPostElement) => {
  return (
    <SContainer $minHeight={standalone ? '300px' : ''}>
      <Link to={'/posts/' + data.id}>
        <SHeader>
          <SHeaderText>by {data.user.name}</SHeaderText>
          <SHeaderText>{new Date(data.createdAt).toDateString()}</SHeaderText>
        </SHeader>
        <SContent>{data.text}</SContent>
      </Link>
      <SActions $standalone={standalone}>
        <AddToFavorites postId={data.id} />
        {standalone && <DeletePostButton postId={data.id} userCreatorId={data.user.id} />}
        <Likes id={data.id} likes={data.likes} dislikes={data.dislikes} />
        <Dislikes id={data.id} likes={data.likes} dislikes={data.dislikes} />
      </SActions>
    </SContainer>
  );
};

const SContainer = styled.div<{ $minHeight?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing(1)};
  width: 100%;
  ${(props) => props.$minHeight && `min-height: ${props.$minHeight};`};
  height: fit-content;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing(1)};
  border: ${(props) => props.theme.rounded(0.5)} solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.rounded(2)};
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;

const SHeaderText = styled.span`
  font-size: ${(props) => props.theme.spacing(1.5)};
`;

const SContent = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.spacing(2)};
  cursor: pointer;
`;

const SActions = styled.div<{ $standalone?: boolean }>`
  display: grid;
  grid-template-columns: 1fr ${(props) =>
      props.$standalone ? 'min-content' : ''} min-content min-content;
  grid-template-rows: 1fr min-content;
`;
