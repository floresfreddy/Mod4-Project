import React, {Component} from 'react'
import "./styles.css"

class SignUp extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(console.log)

    }
   
    render(){
        return(
        <div className="signup">
            <img src="./urban.jpg"></img>



            <div class="form-box">
                <div class="form-logo">
                    {/* <p class="text-center"><img src="img/logo.png" alt="logo"></p> */}
                </div>
                <form>
                    <input type="text" class="form-control" name="username" placeholder="Username" onChange={(e) => this.handleChange(e)}/>
                    <input type="password" class="form-control" name="password" onChange={(e) => this.handleChange(e)}/>
                    <input type="checkbox"/> Save Password
                    <input type="submit" class="btn btn-social" value="LOGIN"/>
                </form>
                <a href="#" class="login-action" title="Forgot password">
                    <p>Forgot your password?</p>
                </a>
                <a href="signin.html" class="login-action" title="Signi in">
                    <p>New User?</p>
                </a>
            </div>
            


            {/* <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>UserName</label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            <input type="submit"/>
            </form> */}
        </div>
        )
    }
}

export default SignUp


