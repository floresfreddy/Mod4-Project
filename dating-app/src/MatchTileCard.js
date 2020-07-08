import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Message from './Messages.js'

class MatchTileCard extends React.Component{

    render(){
        return(
            <div>
                <br/>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.user.username}</Card.Header>
                        <Card.Description>
                            {this.props.user.bio}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Message/>
                        {/* <Button onClick={this.message}>Message</Button> */}

                        {/* <Modal dimmer="blurring" size="small" trigger={<Button>Message</Button>}>
                            <Modal.Header></Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <Header>LET'S CONNECT</Header>
                                        <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
                                    </Modal.Description>
                                </Modal.Content>
                        </Modal> */}

                        <Button>Delete</Button>
                        </Card.Content>
                    </Card>
            </div>
           
        )
          
    }

}

export default withRouter(MatchTileCard)