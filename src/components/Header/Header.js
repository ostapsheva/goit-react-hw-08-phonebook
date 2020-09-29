import React, { Component } from 'react';
import { RegistLoginLinks } from './RegistLoginLinks';
import UserMenu from './UserMenu';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelector';
import authSelector from '../../redux/auth/authSelector';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        {this.props.isAuth ? <UserMenu /> : <RegistLoginLinks />}
      </header>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
  name: authSelector.name(state),
});

export default connect(mapStateToProps)(Header);
