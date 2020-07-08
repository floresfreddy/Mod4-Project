import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Messages from './Messages.js'

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
                        <Card.Content extra className="center">
                            <Messages user={this.props.user} allusers={this.props.allUsers}/>
                            <Button>Delete</Button>
                        </Card.Content>
                    </Card>
            </div>
           
        )
          
    }

}

export default withRouter(MatchTileCard)