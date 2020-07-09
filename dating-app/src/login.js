import React, {Component} from 'react'
import {
    Button,
    Form,
    Grid,
    Message,
    Segment,
  } from 'semantic-ui-react';
  import { NavLink, withRouter } from 'react-router-dom';


class Login extends Component{
    state = {}
  

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
                console.log(userInfo)
            localStorage.token = userInfo.token 
            localStorage.user = this.state.username 
            
            this.props.history.push("/profile") 
        }
        )
        
    }
   
    render(){
        return(
      
        <div className="Login_Div bg-img">
            
        <Grid centered columns={2}>
            <Grid.Column style={{position: 'absolute', left: '35%'}}>
                    <img className="logo" alt="logo" src={require('./logo.png')}></img>
              
            <Segment style={{width: '500px'}}>
                <Form size="large" onSubmit={(e) => this.logIn(e)} >
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
                    <Button color="grey" fluid size="large">
                        Login
                    </Button>
                </Form>
            
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
            
            </Segment>
            
            </Grid.Column>
        </Grid>
        </div>
        )
    }
}


export default withRouter(Login)

