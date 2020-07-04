import React from 'react';
import Form from './Form.js';
import Matches from './Matches.js';

class Profile extends React.Component {

  render() {
    return(
      <div>
          <Matches/>
          <Form/>
      </div>
    )
  }
}

export default Profile;