import { useAuth } from '@entities/auth/model/use-auth';
import { useDeletePostMutation } from '@entities/posts/api/slice';
import { SButton } from '@shared/ui/button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';

interface IDeletePostButton {
  postId: string;
  userCreatorId: string;
}

export const DeletePostButton = ({ postId, userCreatorId }: IDeletePostButton) => {
  const theme = useTheme();
  const user = useAuth();
  const navigate = useNavigate();

  const [deletePost] = useDeletePostMutation();

  const onClick = useCallback(() => {
    deletePost(postId);
    navigate('/login');
  }, [deletePost, navigate, postId, user, userCreatorId]);

  if (!user || user.id !== userCreatorId) {
    return null;
  }

  return (
    <SButton
      $variant={'contained'}
      $color={theme.colors.secondary}
      $secondColor={theme.colors.background}
      onClick={() => onClick()}
    >
      Delete
    </SButton>
  );
};
