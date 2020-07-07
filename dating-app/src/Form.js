import React from 'react';
import { withRouter } from 'react-router-dom';

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


   fetch("http://localhost:3000/terms",
   {
     method: "POST",
     headers: {
      //  "Authorization": `Bearer ${localStorage.token}`,
       "Content-Type" : "application/json"
     },
     body: JSON.stringify({
        terms: topTerms,
        // 'username': localStorage.getItem('user')
        username: localStorage.getItem('user')
      })
   })
   .then(res => this.props.setTerms(topTerms)

   )

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

export default withRouter(Form)