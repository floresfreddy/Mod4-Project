import React from 'react';
import { withRouter } from 'react-router-dom';
import MatchTileList from './MatchTileList.js'
import SearchTermList from './SearchTermList.js'
import Form from './Form.js'


class MainContainer extends React.Component {

  state = {
    terms: [],
    filteredTerms: []
  }

  setTermsList = (terms) => {
    this.setState({
      terms: terms, 
      filteredTerms: terms
    })
  }

  filter=(term)=>{
    this.setState({
      filteredTerms: this.state.filteredTerms.filter(word=> word !== term)
    })
  }




  renderSwitch(param) {
      switch(param) {
        case 'match':
          return <Form setTerms={this.setTermsList} selectedLink={this.props.selectedLink}/>
        case 'messages':
          return <h1>Messages go here</h1>
        case 'matches': 
          return <MatchTileList users={this.props.users}/>
        case 'searchTerms': 
          return <SearchTermList terms={this.state.filteredTerms} filter={this.filter}/>
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