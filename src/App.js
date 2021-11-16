import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import './App.css';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Restaurant from './views/Restaurant';
import Menu from './views/Menu';
import Cart from './views/Cart';
Amplify.configure(awsconfig);

function App() {

  const listener = (data) => {
    switch (data.payload.event) {
      case 'signIn':
        console.info('user signed in');
        break;
      case 'signOut':
        console.info('user signed out');
        break;
      case 'signIn_failure':
        console.error('user sign in failed');
        break;
      case 'configured':
        console.info('the Auth module is configured');
        break;
      default:
        console.error('unknown event: ', data.payload.event);
    }
  }
  Hub.listen('auth', listener);

  const [userData, setUserData] = useState({ payload: { username: '' } });

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    await Auth.currentAuthenticatedUser()
      .then((userSession) => {
        //console.log("userData: ", userSession);
        setUserData(userSession.signInUserSession.accessToken);
      })
      .catch((e) => console.log("Not signed in", e));
  }

  function isAdmin() {
    return userData.payload['cognito:groups'] && userData.payload['cognito:groups'][0] === "Admins";
  }

  function userInfo() {
    return (
      <>
        {userData.payload.username} <div className="badge">{isAdmin() ? "Restaurant" : "User"}</div>
      </>
    );
  }

  return (
    <div className="App">
          <Router>
            <SideNav />
            <Switch>
              <Route path='/' exact component={Restaurant} />
              <Route path='/menu' exact component={Menu} />
              <Route path='/cart' exact component={Cart} />
            </Switch>
          </Router>
      <hr />
      <div className="userinfo">
        { userInfo()}
      </div>
    </div>
  );
}

export default withAuthenticator(App);