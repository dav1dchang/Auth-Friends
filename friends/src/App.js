import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth';


import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .then(res=>{
        localStorage.removeItem("token");
        setIsLoading(false);
      })
      .catch(err=>{
        console.log(err);
      })
  };

  return (
    <Router>
      <div className="App">
        <ul>
          { (!isLoading) ? (<li> <Link to="/login">Login</Link></li>) : (<div></div>) }
          <li>
            <Link to="#" onClick={logout}>Logout</Link>
          </li>
          { (isLoading) ? (<li> <Link to="/friends">Friends</Link></li>) : (<div></div>) }
        </ul>
        
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" render={(props)=>{
            return <Login {...props} setIsLoading={setIsLoading} />
          }} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
