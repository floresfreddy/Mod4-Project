import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import MatchTileCard from './MatchTileCard.js'

class MatchTileList extends React.Component{
    
    state= {
        filteredlist: null
    }

    deleteMatch=(deletedUser)=>{
        if(!this.state.filteredlist){
            this.setState({
                filteredlist: this.props.users.slice(0,9).filter(user=> user !== deletedUser)
            })
        }
        else{
            this.setState({
                filteredlist: this.state.filteredlist.slice(0,9).filter(user=> user !== deletedUser)
            })
        }
    }
    
    
    render(){
        if(!this.state.filteredlist){
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
                    {this.props.users.slice(0,10).map(user=> <MatchTileCard user={user} allUsers={this.props.users} deleteMatch={this.deleteMatch}/>)}
                </Card.Group>
            </div>
           
        )
        }
        else{
            return (
                <div>
                <br/>
                <br/>
                <Card.Group itemsPerRow={3}>
                    {this.state.filteredlist.slice(0,10).map(user=> <MatchTileCard user={user} allUsers={this.props.users} deleteMatch={this.deleteMatch}/>)}
                </Card.Group>
            </div>
            )
        }
          
    }

}

export default withRouter(MatchTileList)




