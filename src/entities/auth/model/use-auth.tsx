import { RootState } from '@app/store/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  return useSelector((state: RootState) => state.auth.user);
};

export const useIsAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return !!user;
};
