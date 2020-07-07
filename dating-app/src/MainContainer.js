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

    fetch("http://localhost:3000/terms",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } 
      })
      .then(res => res.json())
      .then(data => 
        {
          console.log(data)
      }
      )

  }





  renderSwitch(param) {
      switch(param) {
        case 'match':
          return <Form setTerms={this.setTermsList} selectedLink={this.props.selectedLink}/>
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