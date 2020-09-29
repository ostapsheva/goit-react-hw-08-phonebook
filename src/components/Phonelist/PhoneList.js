import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import contactsOperation from '../../redux/contacts/contacts-operation';
import selectorContacts from '../../redux/contacts/contacts-selector';
import styles from './Phone.module.css';

const PhoneList = props => {
  const { items, onDelete } = props;

  return (
    <TransitionGroup component="ul" className={styles.ul}>
      {items.map(el => {
        const { number, name, id } = el;
        return (
          <CSSTransition
            key={id}
            in
            timeout={250}
            unmountOnExit
            classNames={styles}
          >
            <li key={id} className={styles.li}>
              <span>{name}: </span>
              <span className={styles.p}>{number}</span>

              <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

PhoneList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  items: selectorContacts.getFilteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperation.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
