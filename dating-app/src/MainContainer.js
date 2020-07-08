import React from 'react';
import { withRouter } from 'react-router-dom';
import MatchTileList from './MatchTileList.js'
import SearchTermList from './SearchTermList.js'
import Form from './Form.js'
import MessageList from "./MessageList.js"


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

  submitTerms=()=>{
    console.log(this.state.filteredTerms)
      fetch("http://localhost:3000/terms",
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
       terms: this.state.filteredTerms,
       // 'username': localStorage.getItem('user')
       username: localStorage.getItem('user')
     })
  })
  .then(res => 
    console.log(res)
  )

  }


  renderSwitch(param) {
      switch(param) {
        case 'match':
          return <Form setTerms={this.setTermsList} selectedLink={this.props.selectedLink}/>
        case 'messages':
          return <MessageList users={this.props.users}/>
        case 'matches': 
          return <MatchTileList users={this.props.users}/>
        case 'searchTerms': 
          return <SearchTermList terms={this.state.filteredTerms} submitTerms={this.submitTerms} filter={this.filter}/>
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