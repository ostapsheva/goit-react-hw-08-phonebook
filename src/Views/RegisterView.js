import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import authOperations from '../redux/auth/authOperation';
import routes from '../routes';
import phonebook from '../Views/ContactView.module.css';
import styles from './LoginRegistration.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegistration({ ...this.state });

    this.setState({ name: '', email: '', password: '' });
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
            Name{' '}
            <input
              className={styles.input}
              onChange={this.handleOnChange}
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Name"
            />
          </label>
          <label className={styles.label}>
            Email{' '}
            <input
              className={styles.input}
              onChange={this.handleOnChange}
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Email"
            />
          </label>
          <label className={styles.label}>
            Password (min 7 characters){' '}
            <input
              className={styles.input}
              onChange={this.handleOnChange}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </label>
          <button className={styles.button} type="submit">
            Sign up
          </button>
          <p>
            If you have an account, please{' '}
            <NavLink to={routes.login}>log in</NavLink>.
          </p>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegistration: authOperations.registration })(
  RegisterView,
);
