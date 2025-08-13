import { useAuth } from '@entities/auth/model/use-auth';
import {
  useUpdatePostDislikesMutation,
  useUpdatePostLikesMutation,
} from '@entities/posts/api/slice';
import { IPostUser } from '@entities/posts/model/types';
import Icon from '@shared/assets/like.svg?react';
import { SContainer, SCount, SIcon } from '@shared/ui/post-action-icons';
import { useCallback } from 'react';
import { useTheme } from 'styled-components';

interface ILikes {
  id: IPostUser['id'];
  likes: IPostUser['likes'];
  dislikes: IPostUser['dislikes'];
}

export const Likes = ({ id, likes, dislikes }: ILikes) => {
  const theme = useTheme();
  const user = useAuth();
  const [updateLikes] = useUpdatePostLikesMutation();
  const [updateDislikes] = useUpdatePostDislikesMutation();

  const onClick = useCallback(() => {
    if (!user) {
      return;
    }

    const likeIndex = likes.findIndex((id) => id === user.id);
    if (likeIndex === -1) {
      updateLikes({ id, likes: [...likes, user.id] });
      const dislikeIndex = dislikes.findIndex((id) => id === user.id);
      if (dislikeIndex !== -1) {
        const newDislikes = [...dislikes];
        newDislikes.splice(dislikeIndex, 1);
        updateDislikes({ id, dislikes: newDislikes });
      }
    } else {
      const newLikes = [...likes];
      newLikes.splice(likeIndex, 1);
      updateLikes({ id, likes: newLikes });
    }
  }, [dislikes, id, likes, updateDislikes, updateLikes, user]);

  const color = likes.find((id) => id === user?.id) ? theme.colors.primary : undefined;

  const NewIcon = SIcon(Icon);
  return (
    <SContainer onClick={() => onClick()}>
      <NewIcon $color={color} />
      <SCount $color={color}>{likes.length}</SCount>
    </SContainer>
  );
};
