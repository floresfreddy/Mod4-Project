import React from 'react';
import { withRouter} from 'react-router-dom';
import "./styles.css"
import { Icon } from 'semantic-ui-react'

class SideBar extends React.Component {

    logout = () => {
        localStorage.clear()
        this.setState({
            login: false 
        })
    }

 match=()=>{
    this.props.selectedLink("match")
 }

 matches=()=>{
    this.props.selectedLink("matches")
 }

 matches=()=>{
    this.props.selectedLink("matches")
 }

searchTerms=()=>{
    this.props.selectedLink("searchTerms")
 }

 messages=()=>{
    this.props.selectedLink("messages")
 }

  render() {
    return(
        <div>
        { localStorage.token
            ? <div className="sidebar-nav">
                <img src={require('./user.jpg')}alt="User name" className="img-circle img-user"></img>
        <h2 className="text-center hidden-xs">{localStorage.getItem("user")}'s Profile</h2>
                
                <p onClick={this.match} className="text-center user-description hidden-xs">
                    <Icon name="heart"/>Get Matched
                </p>

                <p onClick={this.searchTerms} className="text-center user-description hidden-xs">
                <Icon name="search"/>Search Terms
                </p>

                <p onClick={this.matches} className="text-center user-description hidden-xs">
                   <Icon name="connectdevelop"/> Matches 
                </p>
             
                <p className="text-center user-description hidden-xs" onClick={this.messages}>
                    <Icon name="envelope"/>Messages
                </p>

                <p className="text-center user-description hidden-xs" onClick={this.logout}>
                    <Icon name="log out"/>Logout
                </p>

              </div>
            : this.props.history.push("/login")
        }

        </div>
     

    )
  }
}

export default withRouter(SideBar)