import React, {Component} from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Image,
  } from 'semantic-ui-react';
  import { BrowserRouter as NavLink, withRouter } from 'react-router-dom';
  import Profile from './Profile.js'

class Login extends Component{
  

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // logout = () => {
    //     localStorage.clear()
    // }

    logIn = (e) => {
        e.preventDefault()
        

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res =>  res.json())
        .then(userInfo => 
            {
            localStorage.token = userInfo.token
        }
        )
        this.props.history.push("/profile");
    }
   
    render(){
        return(
      
        <div className="Login_Div bg-img">
            
        <Grid centered columns={2}>
            <Grid.Column>
                    <img className="logo" src={require('./logo.png')}></img>
              
            <Segment>
                <Form size="large"  onSubmit={(e) => this.logIn(e)}>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="User Name"
                        name="username"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Button color="gray" fluid size="large">
                        Login
                    </Button>
                </Form>
            
            </Segment>
            <Message>
                Not registered yet? 
                <NavLink
                to="/signup"
                exact
                
                activeStyle={{
                    background: 'darkblue'
                }}
                > Signup</NavLink>
            </Message>
            
            
            </Grid.Column>
        </Grid>
        </div>
        )
    }
}


export default withRouter(Login)

