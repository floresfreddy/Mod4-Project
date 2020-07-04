import React from 'react';
import Profile from './Profile.js'
import NavBar from './nav.js'
import LogIn from './login_signup.js'
// const json = require("./history (1).json")

class App extends React.Component {
  
  state = {
    loggedIn: true 
  }
  
  render() {

    if (!this.state.loggedIn){
      return (
        <div>
          <LogIn/>
        </div>
      )
    }
    else{
      return(
      <div>
        <NavBar />
        <Profile /> 
      </div>
      )
    }
    
  }
}

export default App;



