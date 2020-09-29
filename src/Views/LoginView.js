import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import authOperations from '../redux/auth/authOperation';
import routes from '../routes';
import styles from './LoginRegistration.module.css';
import phonebook from '../Views/ContactView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ ...this.state });

    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <>
        <CSSTransition
          appear={true}
          in
          timeout={500}
          unmountOnExit
          classNames={phonebook}
        >
          <h1 className={phonebook.title}>Phonebook</h1>
        </CSSTransition>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email{' '}
            <input
              className={styles.input}
              onChange={this.handleOnChange}
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label className={styles.label}>
            Password{' '}
            <input
              className={styles.input}
              onChange={this.handleOnChange}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="Password"
              required
            />
          </label>

          <button className={styles.button} type="submit">
            Log in
          </button>
          <p>
            If you don't have an account yet, please{' '}
            <NavLink to={routes.register}>sing up</NavLink>.
          </p>
        </form>
      </>
    );
  }
}

export default connect(null, { login: authOperations.logIn })(LoginView);
