import { RootState } from '@app/store/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

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

export const usePostFilterData = () => {
  const username = useSelector((state: RootState) => state.postFilter.username);
  const dispatch = useDispatch();

  const setUsername = (value: string) => dispatch(setName(value));

  return { username, setUsername };
};
