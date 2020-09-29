import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Header.module.css';

export const RegistLoginLinks = () => {
  return (
    <div className={styles.navigation}>
      <NavLink exact activeClassName={styles.active} to={routes.login}>
        Log in
      </NavLink>
      <span className={styles.span}>|</span>
      <NavLink exact activeClassName={styles.active} to={routes.register}>
        Sign up
      </NavLink>
    </div>
  );
};
