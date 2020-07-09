import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import SearchTermCard from './SearchTermCard.js'

class SearchTermList extends React.Component{
  state={
    terms: []
  }

sendTerms=()=>{
  this.props.submitTerms()
  this.props.selectedLink("matches")
  
}

render(){
    return(
  <div className="center">
    <h1>My Search Words</h1>
      <p>To get matched with new friends, click on the words you would like to delete:</p>
      <Button onClick={this.sendTerms}>Submit Your Search Words</Button>
      <br/> 
      <br/> 
      {this.props.terms.map(term => <SearchTermCard term={term} key={term} filter={this.props.filter}/>)}
  </div>
)}
}

export default withRouter(SearchTermList)