import React from 'react';
<<<<<<< HEAD
import Profile from './Profile.js'
=======
import Form from './Form.js'
>>>>>>> Stephanie
import NavBar from './NavBar.js'
import LogIn from './login.js'
import './styles.css'
import Form from './Form.js'


class App extends React.Component {
  
  state = {
    loggedIn: true 
  }
  
  render(){

    return (
  
    <div className="bg-img">
        <LogIn/> 
    </div>
    

       
    )
  }
}

export default App;



