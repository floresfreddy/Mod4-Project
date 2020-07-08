import React from 'react'
import { Grid, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MessageCard extends React.Component{

  

    render(){
      let sender=this.props.allUsers.find(x=> x.id === this.props.message.sender_id)
      let receiver= this.props.allUsers.find(x=> x.id === this.props.message.user_id)

        return(
        <div>
         
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src={sender.avatar}
                />
                <Card.Header>From: {sender.username}<br/> To: {receiver.username}</Card.Header>
                <Card.Description>
                  <strong>Message: {this.props.message.message}</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='grey'>
                    Reply
                  </Button>
                  <Button basic color='grey'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
           
 
        </div>     
        )
      
    }


}
  


export default withRouter(MessageCard)