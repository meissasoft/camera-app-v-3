import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appState } from './types';

export const initialState: appState = {
  verificationStep: 0,
  selectedLanguage: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setVerificationStep: (state: appState, action: PayloadAction<number>) => {
      state.verificationStep = action.payload;
    },
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<appState>) => {
    console.log(builder);
    // Pending state of API
  },
});

export const { setVerificationStep } = appSlice.actions;

export default appSlice.reducer;
