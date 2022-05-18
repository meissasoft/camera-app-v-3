import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginService } from '@/services/auth/loginService';

import { UserState, ILoginRequest, LoginState } from './types';

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
    setLoginStep: (state: LoginState, action: PayloadAction<number>) => {
      state.loginSteps = action.payload;
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

export const { setLoginStep } = authSlice.actions;

export default authSlice.reducer;
