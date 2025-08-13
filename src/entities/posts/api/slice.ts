import { DB_HOST } from '@app/routes/db-route';
import { IPost, IPostUser } from '@entities/posts/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: DB_HOST }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `posts`,
      providesTags: ['Posts'],
    }),
    getPostsWithUsers: builder.query<IPostUser[], void>({
      query: () => `/posts?_embed=user`,
      providesTags: ['Posts'],
    }),
    updatePostLikes: builder.mutation<void, { id: IPostUser['id']; likes: IPostUser['likes'] }>({
      query: ({ id, likes }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: { likes },
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePostDislikes: builder.mutation<
      void,
      { id: IPostUser['id']; dislikes: IPostUser['dislikes'] }
    >({
      query: ({ id, dislikes }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: { dislikes },
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsWithUsersQuery,
  useUpdatePostLikesMutation,
  useUpdatePostDislikesMutation,
} = postsApi;
