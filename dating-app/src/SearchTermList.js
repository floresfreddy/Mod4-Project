import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react'
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
  if (this.props.terms.length === 0){
    return (
        <div>
            <h1>No Current Search Terms</h1>
            <p>Please go to "Get Matched" section to submit your search terms.</p>
        </div>
    )
}
    return(
  <div>
    <h1>My Search Words</h1>
      <p>To get matched with new friends, click on the words you would like to delete:</p>
      
      <br/> 
      <br/> 
      <List horizontal relaxed size="large">
        {this.props.terms.map(term => <SearchTermCard term={term} key={term} filter={this.props.filter}/>)}
      </List>
      <Button className="center" onClick={this.sendTerms}>Submit Your Search Words</Button>
  </div>
)}
}

export default withRouter(SearchTermList)