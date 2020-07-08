import React from 'react'
import { Grid, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import MessageCard from "./MessageCard.js"

class MessageList extends React.Component{

    render(){
        return(
        <div>
            <br/>
            <br/>
            <Card.Group>
                <MessageCard users={this.props.users}/>
            </Card.Group>
        </div>     
        )
      
    }


}
  


export default withRouter(MessageList)