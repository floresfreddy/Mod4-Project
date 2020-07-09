import React from 'react'
import { withRouter } from 'react-router-dom';
import { Message, List } from 'semantic-ui-react'

class SearchTermCard extends React.Component{

   filter=()=>{
     this.props.filter(this.props.term)
   }

render(){
    return(
      <List.Item>
          <Message color='teal' key='teal' size='large' onClick={this.filter}>
             {this.props.term}
          </Message>
      </List.Item>
  
)}
}

export default withRouter(SearchTermCard)
