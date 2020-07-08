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
    users: [],
    selected: 'match',
    matches: []
  }

  selectedLink=(value)=>{
    this.setState({
      selected: value
    })
  }

  componentDidMount(){
      fetch("http://localhost:3000/api/v1/users",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`,
          "Content-type": "application/json", 
          "Accept": "application/json"
        } 
      })
      .then(res => res.json())
      .then(data => 
        {
          console.log(data)
          this.setState({
            users: data
          })
          
        }
      )
      // .then(this.matches())
      
  }

  // matches = () => {
  //   if(this.state.users === []){
  //     this.matches()
  //   }
  //   else{
      
  //     let user = this.state.users.find(user => user.username == localStorage.getItem('user'))


  //     const matches = this.state.users.sort((a,b) => {
  //       let aMatches = user.terms[0].terms.filter((term)=>{return a.terms[0].terms.includes(term)}).length
  //       let bMatches = user.terms[0].terms.filter((term)=>{return b.terms[0].terms.includes(term)}).length


  //       return bMatches - aMatches
  //     })

  //     this.setState({
  //       matches: matches
  //     })
  //     console.log('mathces', matches)
  //   }
    
  // }

  render() {
    return(
      <div>
         { localStorage.token
         ? <div>
              <SideBar selectedLink={this.selectedLink} users={this.state.users}/>
              <NavBar selectedLink={this.selectedLink}/>
              <MainContainer selection={this.state.selected} users={this.state.users} selectedLink={this.selectedLink} matches={this.state.matches}/>
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