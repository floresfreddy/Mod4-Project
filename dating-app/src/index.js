import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from "./SignUp.js"
import login from "./login.js"
import Profile from "./Profile.js"
import MainContainer from "./MainContainer.js"
import SearchTermList from "./SearchTermList.js"

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/match" component={MainContainer} />
    <Route exact path="/searchterms" component={SearchTermList} />
  </div>
</Router>,
  document.getElementById('root')
);

