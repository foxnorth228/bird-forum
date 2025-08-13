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
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
