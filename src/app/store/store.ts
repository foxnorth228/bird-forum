import { commentsApi } from '@entities/comments/model/slice';
import { postsApi } from '@entities/posts/api/slice';
import postFilterReducer from '@entities/posts/model/post-filters-slice';
import { usersApi } from '@entities/users/model/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    postFilter: postFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
