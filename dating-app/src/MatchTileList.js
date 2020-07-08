import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import MatchTileCard from './MatchTileCard.js'

class MatchTileList extends React.Component{
    render(){
        if (this.props.users.length === 0){
            return (
                <h1>No Current Matches</h1>
            )
        }
        return(
            <div>
                <br/>
                <br/>
                <Card.Group itemsPerRow={3}>
                    {this.props.users.map(user=> <MatchTileCard user={user}/>)}
                </Card.Group>
            </div>
           
        )
          
    }

}

export default withRouter(MatchTileList)




