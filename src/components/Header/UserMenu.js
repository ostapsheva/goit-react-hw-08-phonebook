import React from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import styles from './Header.module.css';

const UserMenu = props => {
  return (
    <div className={styles.loginMenu}>
      <span className={styles.userWelcome}>
        Welcome, <span className={styles.userName}>{props.name}!</span>
      </span>
      <button className={styles.button} onClick={props.logout} type="button">
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.auth.user.name,
});

export default connect(mapStateToProps, { logout: authOperation.logOut })(
  UserMenu,
);
