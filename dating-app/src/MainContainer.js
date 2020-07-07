import React from 'react';
import { withRouter } from 'react-router-dom';
import MatchTileList from './MatchTileList.js'
import SearchTermList from './SearchTermList.js'
import Form from './Form.js'


class MainContainer extends React.Component {

  state = {
    terms: []
  }

  setTermsList = (terms) => {
    this.setState({
      terms: terms 
    })

  }





  renderSwitch(param) {
      switch(param) {
        case 'match':
          return <Form setTerms={this.setTermsList}/>
        case 'matches': 
          return <MatchTileList users={this.props.users}/>
        case 'searchTerms': 
          return <SearchTermList terms={this.state.terms}/>
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