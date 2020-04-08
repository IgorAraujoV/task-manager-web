import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';
import history from './services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}
