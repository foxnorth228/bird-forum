import { IComment } from '@entities/comments/model/types';
import { useGetUserQuery } from '@entities/users/api/slice';
import styled from 'styled-components';

interface ICommentElement {
  data: IComment;
}
export const CommentElement = ({ data }: ICommentElement) => {
  const { data: userData } = useGetUserQuery(data.userId);

  return (
    <SContainer>
      <SHeader>
        <SHeaderText>{userData?.name ?? ''}</SHeaderText>
        <SHeaderText>{new Date(data.createdAt).toDateString()}</SHeaderText>
      </SHeader>
      <SContent>{data.text}</SContent>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: ${(props) => props.theme.colors.text};
`;

const SHeaderText = styled.span`
  font-size: ${(props) => props.theme.spacing(1.5)};
`;

const SContent = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.spacing(2)};
`;
