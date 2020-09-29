import axios from 'axios';
import contactsAction from './contact-action';

const addContact = data => dispatch => {
  dispatch(contactsAction.addContactRequest());

  axios
    .post('/contacts', { ...data })
    .then(response => dispatch(contactsAction.addContactSuccess(response.data)))
    .catch(error => dispatch(contactsAction.addContactError(error)));
};

const fetchContacs = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(response =>
      dispatch(contactsAction.fetchContactsSuccess(response.data)),
    )
    .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsAction.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsAction.deleteContactError(error)));
};

export default { addContact, fetchContacs, deleteContact };
