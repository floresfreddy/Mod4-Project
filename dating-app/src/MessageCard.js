import React from 'react'
import { Grid, Image, Segment, Label, Button, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MessageCard extends React.Component{

    render(){
        return(
        <div>
            
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
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