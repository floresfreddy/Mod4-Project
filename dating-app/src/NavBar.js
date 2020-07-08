import React from 'react'
import './styles.css'
import { Icon } from 'semantic-ui-react'

function NavBar(){

    // let logout = () => {
    //     localStorage.clear()
    // }
    
    return(
        // <div className="nav"> 
        //     <Icon name='feed' className="icon_nav"/>
        // </div>
        <div class="navbar">
            <a class="active" href="#">Home</a> 
            {/* <a href="#">Search</a> 
            <a href="#">Contact</a>  */}
            <a href="#"><Icon name="envelope open outline"/>Messages</a>
            
            
      </div>
       
    )
}

export default NavBar