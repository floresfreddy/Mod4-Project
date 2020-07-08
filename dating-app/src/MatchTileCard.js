import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MatchTileCard extends React.Component{
    render(){
        return(
            <div>
                <br/>
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.user.username}</Card.Header>
                        {/* <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta> */}
                        <Card.Description>
                            {this.props.user.bio}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                          
                        </a>
                        <Button>Message</Button>
                        </Card.Content>
                    </Card>
            </div>
           
        )
          
    }

}

export default withRouter(MatchTileCard)