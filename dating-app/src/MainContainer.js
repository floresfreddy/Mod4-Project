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
<<<<<<< HEAD
=======

>>>>>>> 827ebe3698ed09a677c605a6ec89a85c5d89d62f
  }

  filter=(term)=>{
    this.setState({
      filteredTerms: this.state.filteredTerms.filter(word=> word !== term)
    })
  }




  renderSwitch(param) {
      switch(param) {
        case 'home' :
          return <h1>Home</h1>
        case 'match':
          return <Form setTerms={this.setTermsList} selectedLink={this.props.selectedLink}/>
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