import { DB_ROUTE } from '@app/routes/db-route';
import { IPost, IPostUser } from '@entities/posts/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB_ROUTE }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `posts`,
    }),
    getPostsWithUsers: builder.query<IPostUser[], void>({
      query: () => `/posts?_embed=user`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsWithUsersQuery } = postsApi;
