import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authAction';

const dataInitialState = {
  name: null,
  email: null,
};

const userDataReducer = createReducer(dataInitialState, {
  [actions.registrationSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [actions.loginSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [actions.logoutSuccess]: (_, __) => ({
    name: null,
    email: null,
  }),
  [actions.getCurrentUserSuccess]: (_, actions) => ({
    ...actions.payload,
  }),
});

const tokenReducer = createReducer(null, {
  [actions.registrationSuccess]: (_, action) => action.payload.token,
  [actions.loginSuccess]: (_, action) => action.payload.token,
  [actions.logoutSuccess]: (_, __) => null,
});

const errorReducer = createReducer(null, {
  // [actions.getCurrentUserError]: (_, action) => action.payload,
  [actions.loginError]: (_, action) => action.payload,
  [actions.logoutError]: (_, action) => action.payload,
  [actions.registrationError]: (_, action) => action.payload,
  [actions.logoutSuccess]: () => null,
  [actions.loginSuccess]: () => null,
  [actions.getCurrentUserSuccess]: () => null,
  [actions.registrationSuccess]: () => null,
  [actions.clearError]: () => null,
});

export default combineReducers({
  user: userDataReducer,
  token: tokenReducer,
  error: errorReducer,
});
