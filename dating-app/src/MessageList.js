import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import MessageCard from "./MessageCard.js"

class MessageList extends React.Component{

    state={
        messages: [],
        filteredMessages: []
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
              messages: data,
              filteredMessages: data
            })
          }
        )
    }

    declineMessage=(value)=>{
        console.log(value)
        fetch(`http://localhost:3000/messages/${value.id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-type": "application/json", 
            "Accept": "application/json"
          }, 
          body: JSON.stringify({
              id: value.id 
          })
        })
        .then(res => 
         this.setState({
                filteredMessages: this.state.filteredMessages.filter(message => message !== value )
            })
        )
        // this.setState({
        //    filteredMessages: this.state.filteredMessages.filter(message => message !== value )
        // })
    }

    render(){
        let currentUser= this.props.users.find(user => user.username===localStorage.getItem("user"))
        let receivingMessages= this.state.filteredMessages.filter(user=> user.user_id === currentUser.id)
        let sendingMessages= this.state.filteredMessages.filter(user=> user.sender_id === currentUser.id)
        if (receivingMessages === null){
            return(
                <h1>No Current Messages Received</h1>
            )
        }
        return(
        <div>
            <br/>
            <br/>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column >
                    <h1>Messages Received:</h1>
                    <br/>
                        <Card.Group>
                            {receivingMessages.map(message => 
                                <MessageCard decline={this.declineMessage} key={message} message={message} allUsers={this.props.users}/> )}
                        </Card.Group>
                </Grid.Column>

                <Grid.Column>
                    <h1>Messages Sent:</h1>  
                    <br/>
                        <Card.Group>
                            {sendingMessages.map(message => 
                                <MessageCard decline={this.declineMessage} key={message.id} message={message} allUsers={this.props.users}/>)}
                        </Card.Group>

                </Grid.Column>
            </Grid>
        </div>     
        )
      
    }


}
  


export default withRouter(MessageList)