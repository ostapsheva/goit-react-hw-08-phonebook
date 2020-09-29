import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-action';
import authAction from '../auth/authAction';

const itemsReducer = createReducer([], {
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(el => el.id !== action.payload),
  [actions.fetchContactsSuccess]: (state, action) => [
    ...state,
    ...action.payload,
  ],
  [authAction.logoutSuccess]: () => [],
});

const filterReducer = createReducer('', {
  [actions.onSearch]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loadingReducer,
});
