import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    let logout = () => {
        localStorage.clear()
    }
    
    return(
    <div> 
        <div className="item">
        <h2 className="ui header">
            <div className="content">
                <Link to="/signup" style={{color: "black"}}>SignUp</Link>
            </div>
        </h2>
        </div>
        <div className="item">
        <h2 className="ui header">
            <div className="content">
                <Link to="/login" style={{color: "black"}}>Login</Link>
            </div>
        </h2>
        </div>
        {/* <div className="item">
        <h2 className="ui header">
            <div className="content">
               <button onClick={logout}>Logout</button>
            </div>
        </h2>
        </div> */}
        
    </div>
       
    )
}

export default NavBar