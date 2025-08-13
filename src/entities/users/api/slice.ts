import { DB_HOST } from '@app/routes/db-route';
import { IUser } from '@entities/users/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB_HOST }),
  tagTypes: ['Posts', 'Users', 'Auth'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users`,
    }),
    updateBookmarks: builder.mutation<
      { bookmarks: IUser['bookmarks'] },
      { id: IUser['id']; bookmarks: IUser['bookmarks'] }
    >({
      query: ({ id, bookmarks }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: { bookmarks },
      }),
      invalidatesTags: ['Posts', 'Users'],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateBookmarksMutation } = usersApi;
