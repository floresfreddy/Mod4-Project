import React from 'react';
import Form from './Form.js'
import Profile from './Profile.js'
import NavBar from './NavBar.js'
import LogIn from './login.js'
import SignUp from './SignUp.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles.css'


class App extends React.Component {
  
  state = {
    loggedIn: true 
  }
  
  render(){

    return (
    //   <BrowserRouter>
    // <div>
    //     <NavBar />
    //     <Switch>

    //     <Route path="/login" component={LogIn} />

    //     <Route path="/signup" component={SignUp} />

    //     </Switch>
        

    // </div>
    // </BrowserRouter>
    <div className="bg-img">
      {/* <ImageBackground source={require('./urban.jpg')}
          width={width}
          height={height}
          style = {{flex:1}}>
            {this.props.children}
        </ImageBackground>  */}
        {/* <img src={require('./urban.jpg')}></img> */}
        <LogIn/> 
    </div>
    
      // <SignUp/>
       
    )};
}

export default App;



