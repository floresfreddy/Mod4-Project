import React from 'react';

class Form extends React.Component {
  
  state={
    selectedFile: null
  }

  onFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  onFileUpload = () => {
    // fetch data or figure out how to use axios 
    console.log(this.state.selectedFile)



  }
  
  render() {
    return(
      <div>
        <p>download your history using this extenxion</p>
        <a href='https://chrome.google.com/webstore/detail/history-export/lpmoaclacdaofhlijejogfldmgkdlglj'>Extension</a>
        <br/>
        <br></br>
        <p>Upload your file here</p>
        <input type='file' onChange={this.onFileChange}/>
        <button onClick={this.onFileUpload}>Upload</button>
       
      </div>
    )
  }
}

export default Form;