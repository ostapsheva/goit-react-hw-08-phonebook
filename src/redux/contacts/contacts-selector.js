import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const isLoading = state => state.contacts.loadingReducer;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    const normalizeFilter = filter.toLowerCase();
    const searchByNameContacts = items.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter),
    );
    return searchByNameContacts;
  },
);

export default {
  getItems,
  isLoading,
  getFilteredContacts,
  getFilter,
};
