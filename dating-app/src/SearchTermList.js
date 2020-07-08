import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import SearchTermCard from './SearchTermCard.js'

class SearchTermList extends React.Component{
  state={
    terms: []
  }

render(){
    return(
  <div style={{
    position: 'relative', left: '50%', top: '50%'
}}>
    <br/>
    <br/>
    <h1>My Search Words</h1>
      <p>Choose up to 10 Search Words to get Matched. Click on the words you would like to delete:</p>
      <Button>Submit Your Search Words</Button>
      <br/> 
      <br/> 
      {this.props.terms.map(term => <SearchTermCard term={term} key={term} filter={this.props.filter}/>)}
  </div>
)}
}

export default withRouter(SearchTermList)