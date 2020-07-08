import React from 'react'
import { Grid, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import MessageCard from "./MessageCard.js"

class MessageList extends React.Component{

    state={
        messages: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/messages",
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
          {console.log(data)
            this.setState({
              messages: data
            })
          }
        )
    }

    render(){
        let currentUser= this.props.users.find(user => user.username===localStorage.getItem("user"))
        let receivingMessages= this.state.messages.filter(user=> user.user_id === currentUser.id)
        if (receivingMessages === null){
            return(
                <h1>No Current Messages Received</h1>
            )
        }
        return(
        <div>
            <br/>
            <br/>
            <Card.Group>
                {receivingMessages.map(message => 
                    <MessageCard message={message} allUsers={this.props.users}/>)}
            </Card.Group>
        </div>     
        )
      
    }


}
  


export default withRouter(MessageList)