import React from 'react'
import { withRouter } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import SearchTermCard from './SearchTermCard.js'

class SearchTermList extends React.Component{
render(){
    return(
  <div>
    <h1>My Search Words</h1>
      <p>Choose up to 10 Search Words to get Matched:</p>
      <br/> 
      <br/> 
      {this.props.terms.map(term => <SearchTermCard term={term}/>  )}
  </div>
)}
}

export default withRouter(SearchTermList)