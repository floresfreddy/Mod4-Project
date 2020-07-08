import React from 'react'
import { withRouter } from 'react-router-dom';
import { Message } from 'semantic-ui-react'

class SearchTermCard extends React.Component{

   filter=()=>{
     this.props.filter(this.props.term)
   }

render(){
    return(
          <Message color='teal' key='teal' size='large' onClick={this.filter}>
             {this.props.term}
          </Message>
  
)}
}

export default withRouter(SearchTermCard)
