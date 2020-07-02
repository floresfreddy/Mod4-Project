import React from 'react';
import Form from './Form.js'
import Profile from './Profile.js'
import NavBar from './nav.js'
import LogIn from './login_signup.js'

class App extends React.Component {
  
  state = {
    loggedIn: true 
  }
  
  render() {

    if (this.state.loggedIn){
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



