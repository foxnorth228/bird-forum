import { login as loginSlice } from '@entities/auth/model/auth-slice';
import { useGetUsersQuery } from '@entities/users/api/slice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export const useLogin = () => {
  const { data, isLoading, error } = useGetUsersQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useCallback(
    (email: string, password: string) => {
      if (isLoading || error || !data) {
        return null;
      }

      const user = data.find((user) => user.email === email && user.password === password);

      if (!user) {
        return null;
      }

      dispatch(loginSlice(user));
      navigate('/posts');
    },
    [data, dispatch, error, isLoading, navigate]
  );

  return { login };
};
