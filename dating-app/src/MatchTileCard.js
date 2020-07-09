import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Messages from './Messages.js'

class MatchTileCard extends React.Component{

    delete = () =>{
        this.props.deleteMatch(this.props.user)
    }


    render(){
        return(
            <div>
                <br/>
                    <Card style={{height: "440px"}}>
                        <Image src={this.props.user.avatar} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.user.username}</Card.Header>
                        <Card.Description>
                            {this.props.user.bio}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra className="center_message">
                            <Messages user={this.props.user} allusers={this.props.allUsers}/>
                            <Button onClick={(e)=> this.delete()}>Delete</Button>
                        </Card.Content>
                    </Card>
            </div>
           
        )
          
    }

}

export default withRouter(MatchTileCard)