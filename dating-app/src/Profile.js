import React from 'react';
import Form from './Form.js';
import Matches from './Matches.js'
import NavBar from './NavBar.js'
import MainContainer from './MainContainer.js'
import { withRouter } from 'react-router-dom';
import Login from "./login.js"
import SideBar from "./SideBar.js"

class Profile extends React.Component {
  state={
    selected: null 
  }

  selectedLink=(value)=>{
    this.setState({
      selected: value
    })
  }

  render() {
    return(
      <div>
         { localStorage.token
         ? <div>
              <SideBar selectedLink={this.selectedLink}/>
              <NavBar/>
              <MainContainer selection={this.state.selected}/>
           </div>
         : <Login/>
         }
          {/* <Matches/>
          <Form/> */}
          
      </div>
    )
  }
}

export default withRouter(Profile)