import { DB_HOST } from '@app/routes/db-route';
import { IUser } from '@entities/users/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB_HOST }),
  endpoints: (builder) => ({
    getComments: builder.query<IUser, string>({
      query: () => `comments`,
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
