import React from 'react';
import { withRouter } from 'react-router-dom';
import MatchTileList from './MatchTileList.js'

class MainContainer extends React.Component {

    renderSwitch(param) {
        switch(param) {
          case 'match':
            return <h1>Match Form Goes Here</h1>
          case 'matches': 
            return <MatchTileList users={this.props.users}/>
          default: 
            return null; 
        }
    }

  render() {
    return(
      <div className="main_container">
            {this.renderSwitch(this.props.selection)}   
      </div>
    )
  }
}

export default withRouter(MainContainer)