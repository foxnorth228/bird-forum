import { DB_HOST } from '@app/routes/db-route';
import { IUser } from '@entities/users/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB_HOST }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
