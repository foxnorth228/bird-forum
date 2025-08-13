import { IComment } from '@entities/comments/model/types';
import { CommentElement } from '@entities/comments/ui/comment-element';
import styled from 'styled-components';

interface ICommentsGrid {
  data: IComment[];
}

export const CommentsGrid = ({ data }: ICommentsGrid) => {
  return (
    <SContainer>
      <STitle>Comments</STitle>
      {data.map((comment: IComment) => (
        <CommentElement key={comment.id} data={comment} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.spacing(1)} 0;
  gap: ${(props) => props.theme.spacing(1)};
`;

const STitle = styled.p`
  font-size: ${(props) => props.theme.spacing(2)};
  margin: 0;
`;
