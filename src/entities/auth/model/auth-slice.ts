import { usersApi } from '@entities/users/api/slice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../users/model/types';

interface AuthState {
  user: IUser | null;
}

const localUser = localStorage.getItem('user');
const initialState: AuthState = {
  user: localUser ? JSON.parse(localUser) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.updateBookmarks.matchFulfilled, (state, action) => {
      if (state.user) {
        state.user.bookmarks = action.payload.bookmarks;
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
