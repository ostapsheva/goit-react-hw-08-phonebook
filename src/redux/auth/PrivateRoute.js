import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../auth/authSelector';

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
