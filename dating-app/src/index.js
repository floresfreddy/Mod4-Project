import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from "./SignUp.js"
import login from "./login.js"

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={login} />
  </div>
</Router>,
  document.getElementById('root')
);

