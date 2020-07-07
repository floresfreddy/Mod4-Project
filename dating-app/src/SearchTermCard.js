import React from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react'

class SearchTermCard extends React.Component{

   

render(){
    return(
  <div>
      <h1>My Search Words</h1>
      <p>Choose up to 10 Search Words to get Matched:</p>
      <br/> 
          <Label color='teal' key='teal' size='big'>
             Search Word Goes Here
            <Icon name='delete' />
          </Label>
    {/* <Message color='teal'>Search Term Example</Message> */}
   
    </div>
)}
}

export default withRouter(SearchTermCard)
