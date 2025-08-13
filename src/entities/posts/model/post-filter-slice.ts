import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IPostFilters {
  username: string;
}

const initialState: IPostFilters = {
  username: '',
};

export const postFilterSlice = createSlice({
  name: 'postFilter',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setName } = postFilterSlice.actions;

export default postFilterSlice.reducer;
