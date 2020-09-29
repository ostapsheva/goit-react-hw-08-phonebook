import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactActions from '../../redux/contacts/contact-action';
import contactSelector from '../../redux/contacts/contacts-selector';
import styles from './Search.module.css';

const SearchInput = ({ onSearch, value }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="search"
        name="filter"
        value={value}
        onChange={onSearch}
        placeholder="Find contacs by name"
      />
    </label>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelector.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onSearch: e => dispatch(contactActions.onSearch(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
