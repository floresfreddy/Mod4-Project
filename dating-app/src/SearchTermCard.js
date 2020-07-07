import React from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react'

class SearchTermCard extends React.Component{

   

render(){
    return(

          <Label color='teal' key='teal' size='big'>
             {this.props.term}
            <Icon name='delete'/>
          </Label>

)}
}

export default withRouter(SearchTermCard)
