import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, Step } from 'semantic-ui-react'

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
   this.props.selectedLink("searchTerms")
    if(this.state.selectedFile){
      const reader = new FileReader();
      reader.onload = this.onReaderLoad;
      reader.readAsText(this.state.selectedFile)
    }
  }

  onReaderLoad = (event) => {
    let obj = JSON.parse(event.target.result);
    // console.log(obj)
    this.sortHistory(obj)
    
  }

  sortHistory = (history) => {

    let array = []

    history.forEach(e => {
      


      let title = e.title
      let results = title.toLowerCase().replace(/[^a-zA-Z ]/g, "")
      results = results.split(' ')
      
      const filter = ['google','search',"","to",'and','if','a','new','as','from','the', 'it', 'is', 'we','all', 'a', 'an', 'by', 'to', 'you', 'me', 'he', 'she', 'they', 'we', 'how', 'it', 'i', 'are', 'to', 'for', 'of',"a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]
      let filtered = results.filter(str => !filter.includes(str))

      array.push(filtered)
      
    });

    let flattenedArray = array.flat()

    // filtering
    var frequency = {};

    flattenedArray.forEach(function(value) { frequency[value] = 0; });

    var uniques = flattenedArray.filter(function(value) {
        return ++frequency[value] == 1;
    });

    uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });

   let topArray = Object.entries(frequency).sort((a,b)=> b[1]-a[1]).slice(0,25)

   let topTerms =  []

   topArray.forEach(t=> topTerms.push(t[0]))

  this.props.setTerms(topTerms)
  }

  render() {
    return(
      <div 
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
        <img alt="logo" src={require('./dating.jpg')}></img>
        <br/>
        <br/>
          <Step.Group>
            <Step>
              <Icon name='download' />
              <Step.Content>
                <Step.Title>STEP 1: 
                  <br/>
                  <br/>
                  Download your history using this extension:</Step.Title>
                  <Step.Description>
                    <br/>
                    <a target="_blank" href='https://chrome.google.com/webstore/detail/history-export/lpmoaclacdaofhlijejogfldmgkdlglj'>DOWNLOAD EXTENSION</a>
                  <br/>
                  <br></br>
                  </Step.Description>
              </Step.Content>
            </Step>

            <Step>
              <Icon name='upload' />
              <Step.Content>
                <Step.Title>STEP 2: 
                  <br/>
                  <br/>
                  Upload your file here:</Step.Title>
                <br/>
                  <Step.Description>
                    <input type='file' onChange={this.onFileChange}/>
                  <button onClick={this.onFileUpload}>Upload</button>
                  </Step.Description>
              </Step.Content>
            </Step>
        
          </Step.Group>
        
      
        {/* <p>Upload your file here</p>
        <input type='file' onChange={this.onFileChange}/>
        <button onClick={this.onFileUpload}>Upload</button> */}
       
      </div>
    )
  }
}

export default withRouter(Form)