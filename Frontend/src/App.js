import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Switch,Redirect, withRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes/AppRoutes';
import Navbar from './Navbar/Navbar';
import * as actions from './redux/actions/index';

const App = (props) => {
  const { onTryAutoSignup,isAuthenticated,username } = props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
      <div className="App">
        <Navbar username ={username} isAuthenticated={isAuthenticated}/>
        <Switch>
          <AppRoutes isAuthenticated={isAuthenticated} />
          <Redirect from="/" to="/Login" />
        </Switch>
      </div>

  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    username: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
