import React from 'react';
import { withRouter } from 'react-router-dom';
import MatchTileList from './MatchTileList.js'
import SearchTermList from './SearchTermList.js'
import Form from './Form.js'


class MainContainer extends React.Component {

  state = {
    terms: [],
    filteredTerms: [],
    matchedUsers: this.props.matches
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

    this.makeMatches()
  
  }


  makeMatches = () => {


    let matches = this.props.users.sort((a,b) => {
                    var aMatches = this.state.filteredTerms.filter((term)=>{return a.terms[0].terms.includes(term)}).length
                    var bMatches = this.state.filteredTerms.filter((term)=>{return b.terms[0].terms.includes(term)}).length


                    return bMatches - aMatches
                  })
    console.log("matches", matches)
    this.setState({
      matchedUsers: matches
    })
  
  }




  renderSwitch(param) {
      switch(param) {
        case 'match':
          return <Form setTerms={this.setTermsList} selectedLink={this.props.selectedLink}/>
        case 'messages':
          return <h1>Messages go here</h1>
        case 'matches': 
          return <MatchTileList users={this.state.matchedUsers} />
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