import React from 'react'
import { Button, Header, Image, TextArea, Modal, Segment, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Messages extends React.Component{
render(){
    return(
        <Modal dimmer="blurring" size="small" trigger={<Button>Message</Button>} style={{
            position: 'absolute', left: '60%', top: '50%',
            height: '300px',
            transform: 'translate(-50%, -50%)'
        }}>
        <Modal.Header></Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>LET'S CONNECT</Header>
                    <Segment inverted>
                        <Form inverted>
                        <Form.Field
                            control={TextArea}
                            label='Message'
                        />
                        <Button type='submit'>Send</Button>
                        </Form>
                        </Segment>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}
}
  


export default withRouter(Messages)