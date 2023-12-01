import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../store/config';

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: 'guest-id',
}

export const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers: {    
    changeUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    }
  }
});

export const {changeUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;