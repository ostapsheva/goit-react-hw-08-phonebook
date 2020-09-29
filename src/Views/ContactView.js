import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import contactOperation from '../redux/contacts/contacts-operation';
import contactsSelector from '../redux/contacts/contacts-selector';
import Form from '../components/Form';
import PhoneList from '../components/Phonelist';
import SearchInput from '../components/SearchInput';
import styles from './ContactView.module.css';

class ContactView extends Component {
  componentDidMount() {
    this.props.fetchContacs();
  }

  render() {
    return (
      <>
        <CSSTransition
          appear={true}
          in
          timeout={500}
          unmountOnExit
          classNames={styles}
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <Form />
        <h2>Contacts</h2>
        <CSSTransition
          in={this.props.items.length > 1 || this.props.filter !== ''}
          timeout={250}
          unmountOnExit
          classNames={styles}
        >
          <SearchInput />
        </CSSTransition>
        {this.props.isContactLoading && <h2>Loading...</h2>}
        <PhoneList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: contactsSelector.getItems(state),
    isContactLoading: contactsSelector.isLoading(state),
    filter: contactsSelector.getFilter(state),
  };
};

const mapDispatchToProps = {
  fetchContacs: contactOperation.fetchContacs,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
