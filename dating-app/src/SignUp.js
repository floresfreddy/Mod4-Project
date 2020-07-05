import React, {Component} from 'react'
import "./styles.css"
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Image,
  } from 'semantic-ui-react';
  import { NavLink, Link } from 'react-router-dom';

class SignUp extends Component{
    state = {}

    handleSubmit = () => this.setState({ password: '', username: '', email: ''})

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
        const { username, password, email } = this.state
        return(
            
        <div className="Login_Div bg-img">
            
        <Grid centered columns={2}>
            <Grid.Column>
                    <img className="logo" src={require('./logo.png')}></img>
              
            <Segment>
                <Form size="large">
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail"
                        name= "e-mail"
                        value={email}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="User Name"
                        name= "username"
                        value={username}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name= "password"
                        value={password}
                        onChange={(e) => this.handleChange(e)}
                    />
        
                    <Button color="gray" fluid size="large" onClick={(e) => this.signUp(e)} >
                        Sign Up 
                    </Button>
                    <br/>
                    <NavLink
                        to="/login"
                        exact
                        
                        activeStyle={{
                            background: 'darkblue'
                        }}
                    > 
                        <Button color="gray" fluid size="large" >
                            Log In
                        </Button>

                    </NavLink>
                </Form>
            </Segment>
            
            </Grid.Column>
        </Grid>
        </div>
        )
    }
}

export default SignUp


    {/* <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>UserName</label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            <input type="submit"/>
            </form> */}