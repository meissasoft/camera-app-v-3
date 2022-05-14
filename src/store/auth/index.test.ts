import '@testing-library/jest-dom';
import store from '@/store';

import auth, { initialState, setUser } from './authSlice';
import { MOCKED_USER_DATA } from '@/mocks/auth/signin.mock';

describe('Auth redux state tests', () => {
  it('should compare initial values of auth', () => {
    const state = store.getState().auth;
    expect(state).toEqual(initialState);
  });

  it('should sets user when setUser action is dispatched', () => {
    const action = { type: setUser, payload: MOCKED_USER_DATA };
    const state = auth(initialState, action);
    expect(state.user).toEqual(MOCKED_USER_DATA);
  });

  it('should set isAuthenticated when setAuthenticated action is dispatched', () => {
    const action = { type: setUser, payload: false };
    const state = auth(initialState, action);
    expect(state.isAuthenticated).toEqual(false);
  });

});
