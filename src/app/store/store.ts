import authSlice from '@entities/auth/model/auth-slice';
import { commentsApi } from '@entities/comments/api/slice';
import { postsApi } from '@entities/posts/api/slice';
import postFilterReducer from '@entities/posts/model/post-filter-slice';
import { usersApi } from '@entities/users/api/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    postFilter: postFilterReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
