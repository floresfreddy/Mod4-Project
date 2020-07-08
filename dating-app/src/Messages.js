import React from 'react'
import { Button, Header, Image, TextArea, Modal, Segment, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Messages extends React.Component{

    state = { 
        open: false, 
        message: ""
     }

closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
}

close = () => this.setState({ open: false })

submitMessage=()=>{
    // let currentUser= this.props.allusers.filter(function(x) { return x.username === localStorage.getItem("user"); })
    
    fetch("http://localhost:3000/messages",
    {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        message: this.state.message,
        user_id: this.props.user.id,
        sender_id: this.props.allusers.filter(function(x) { return x.username === localStorage.getItem("user")})[0].id
    })
    })
    .then(res => res.json())
    .then(message=> console.log(message), 
    this.setState({ open: false })
    ) 
}


handleChange = (e) => {
    
         this.setState({
        message: e.target.value
        })
}

render(){
    const { open, closeOnEscape, closeOnDimmerClick } = this.state
    return(
        <Modal dimmer="blurring" size="small" trigger={<Button onClick={this.closeConfigShow(true, false)}>Message</Button>} style={{
            position: 'absolute', left: '60%', top: '50%',
            height: '300px',
            transform: 'translate(-50%, -50%)'
            }}
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}>
        <Modal.Header></Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>LET'S CONNECT</Header>
                    <Segment inverted>
                        <Form inverted>
                        <Form.Field
                            control={TextArea}
                            label='Message'
                            name="Message"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <Modal.Actions>
                        <Button
                            labelPosition='left'
                            icon='send'
                            content='SEND'
                            onClick={this.submitMessage}
                            class="ui grey button"
                        >
                        </Button>
                        </Modal.Actions>
                      
                        </Form>
                        </Segment>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}
}
  


export default withRouter(Messages)