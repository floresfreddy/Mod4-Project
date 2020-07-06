import React from 'react';
import { withRouter } from 'react-router-dom';

class MainContainer extends React.Component {

    renderSwitch(param) {
        switch(param) {
          case 'match':
            return <h1>Get Matched Form</h1>;
          case 'matches': 
            return <h1> Matches Go Here</h1>
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