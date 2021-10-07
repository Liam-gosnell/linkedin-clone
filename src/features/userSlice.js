import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {

    login: (state, action) => {
      state.value = action.payload;

    },
    logout: (state) => {
      state.user += null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
