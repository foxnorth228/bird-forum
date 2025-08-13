import { RootState } from '@app/store/store';
import { setName } from '@entities/posts/model/post-filter-slice';
import { useDispatch, useSelector } from 'react-redux';

export const usePostFilterData = () => {
  const username = useSelector((state: RootState) => state.postFilter.username);
  const dispatch = useDispatch();

  const setUsername = (value: string) => dispatch(setName(value));

  return { username, setUsername };
};
