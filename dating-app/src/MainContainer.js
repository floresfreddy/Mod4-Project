import React from 'react';
import { withRouter } from 'react-router-dom';

class MainContainer extends React.Component {

    renderSwitch(param) {
        switch(param) {
          case 'match':
            return <h1>Get Matched Form</h1>;
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