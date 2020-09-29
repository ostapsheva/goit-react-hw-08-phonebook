import { Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import routes from '../routes';
import authOperations from '../redux/auth/authOperation';
import FirstRoute from '../redux/auth/FirstRoute';
import PublicRoute from '../redux/auth/PublicRoute';
import PrivateRoute from '../redux/auth/PrivateRoute';
import Header from './Header/Header';
import Error from '../components/Error/Error';
import authActions from '../redux/auth/authAction';
import authSelectors from '../redux/auth/authSelector';

const ContactView = lazy(() =>
  import('../Views/ContactView' /* webpackChunkName: "contact-view" */),
);
const LoginView = lazy(() =>
  import('../Views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../Views/RegisterView' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.auth();
    }
    this.props.clearError();
  }
  render() {
    return (
      <>
        <Header />
        {this.props.error && <Error />}
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <PrivateRoute
              exact
              path={routes.contacts}
              component={ContactView}
            />
            <PublicRoute
              path={routes.login}
              restricted={true}
              component={LoginView}
            />
            <PublicRoute
              path={routes.register}
              restricted={true}
              component={RegisterView}
            />
            <FirstRoute />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = state => ({
  error: state.auth.error,
  token: authSelectors.isAuth(state),
});

const mapDispatchToProps = {
  auth: authOperations.getUser,
  clearError: () => authActions.clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
