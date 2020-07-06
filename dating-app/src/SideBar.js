import React from 'react';
import { withRouter } from 'react-router-dom';
import Login from "./login.js"
import "./styles.css"

class SideBar extends React.Component {

    logout = () => {
        localStorage.clear()
        this.setState({
            login: false 
        })
    }

  render() {
    return(
        <div>
        { localStorage.token
            ? <div class="sidebar-nav">
                <img src={require('./user.jpg')}alt="User name" class="img-circle img-user"></img>
                <h2 class="text-center hidden-xs">My Profile</h2>

                
                <p class="text-center user-description hidden-xs">
                    <h3 onClick={this.logout}>Logout</h3>
                </p>
              </div>
            : this.props.history.push("/login")
        }

        </div>
     

    )
  }
}

export default withRouter(SideBar)