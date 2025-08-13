import { useAuth } from '@entities/auth/model/use-auth';
import { useUpdateBookmarksMutation } from '@entities/users/api/slice';
import Icon from '@shared/assets/star.svg?react';
import { SContainer, SIcon } from '@shared/ui/post-action-icons';
import { useCallback } from 'react';
import { useTheme } from 'styled-components';

interface IAddToFavorites {
  postId: string;
}

export const AddToFavorites = ({ postId }: IAddToFavorites) => {
  const theme = useTheme();
  const user = useAuth();
  const [updateBookmarks] = useUpdateBookmarksMutation();

  const onClick = useCallback(() => {
    if (!user) {
      return;
    }

    const bookmarkIndex = user?.bookmarks.findIndex((id) => id === postId);
    if (bookmarkIndex === -1) {
      updateBookmarks({ id: user.id, bookmarks: [...user.bookmarks, postId] });
    } else {
      const newBookmarks = [...user.bookmarks];
      newBookmarks.splice(bookmarkIndex, 1);
      updateBookmarks({ id: user.id, bookmarks: newBookmarks });
    }
  }, [postId, updateBookmarks, user]);

  const isAdded = user?.bookmarks.find((id) => id === postId);
  const color = isAdded ? theme.colors.primary : theme.colors.text;
  const fill = isAdded ? theme.colors.primary : undefined;
  console.log(fill);
  const NewIcon = SIcon(Icon);

  return (
    <SContainer onClick={() => onClick()}>
      <NewIcon $color={color} $fill={fill} />
    </SContainer>
  );
};
