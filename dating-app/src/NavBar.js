import React from 'react'
import './styles.css'
import { Icon } from 'semantic-ui-react'

function NavBar(props){

    return(
       
        <div class="navbar">
            <a class="active" href="#">Home</a> 
            <a href="#"><Icon name="envelope open outline"/>Messages</a>

      </div>
       
    )
}

export default NavBar