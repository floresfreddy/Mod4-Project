import React from 'react';
import Form from './Form.js';
import Matches from './Matches.js'
import { BrowserRouter as Router, Route, NavLink, Link, Redirect,  withRouter } from 'react-router-dom';
import Login from "./login.js"
import SideBar from "./SideBar.js"

class Profile extends React.Component {
  render() {
    return(
      <div>
         { localStorage.token
         ? <SideBar/>
         : <Login/>
         }
          {/* <Matches/>
          <Form/> */}
          
      </div>
    )
  }
}

export default withRouter(Profile)