import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginService } from '@/services/auth/loginService';

import { UserState, User, ILoginRequest } from './types';

export const initialState: UserState = {
  user: {
    phone: '',
    email: '',
    type: '',
    userId: '',
    accountId: '',
  },
  allWallet: [],
  token: '',
  isAuthenticated: false,
  status: '',
  otp: '',
  otpVerified: false,
  error: '',
  otpSent: false,
  actionWalletId: '',
};

//An example to use redux-thunk

export const loginUserThunk = createAsyncThunk('users/login', async (requestData: ILoginRequest) => {
  return await loginService(requestData);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: UserState, { payload }: PayloadAction<User>) {
      state.user = payload;
    },
    setToken(state: UserState, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    clearError(state: UserState) {
      state.error = '';
    },
    resetUser: () => {
      return initialState;
    },
    resetStatus: (state: UserState) => {
      state.status = '';
    },
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    // Pending state of API
    builder.addCase(loginUserThunk.fulfilled, (state: UserState, { payload }) => {
      state.status = payload.response.message;
      state.user.type = payload.response.channelType;
      state.user.email = payload.response.email;
      state.user.phone = payload.response.phone;
      state.otpSent = true;
    });
    builder.addCase(loginUserThunk.rejected, (state: UserState, { error }) => {
      state.status = '';
      state.error = error.message;
      state.otpSent = false;
    });
  },
});

export const { resetUser, setUser, setToken, clearError, resetStatus } = authSlice.actions;

export default authSlice.reducer;
