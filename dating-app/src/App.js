import React from 'react';
// import Form from './Form.js'
// import NavBar from './NavBar.js'
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



