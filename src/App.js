import "./styles.css";
import { useEffect, useMemo, useState } from 'react';

const Preview = ({text, searchKey}) => {
  

  const splittedText = text.split(new RegExp('(' + searchKey + ')', 'gi'))

  return (    
    // <div dangerouslySetInnerHTML={{__html: text}}/>
    <div>{searchKey ? splittedText.map(text => {
      if(text.toLowerCase() === searchKey.toLowerCase()) {
        return <mark>{text}</mark>
      }
      return text;
    }) : text }</div>
  )
}

export default function App() {  
  const [text, setText] = useState("hello hello hello episode");
  const [searchKey, setSearchKey] = useState("");

  // const textContent = useMemo(() => {
  //   const temp = document.createElement("div");
  //   temp.innerHTML = text;        
  //   return temp.textContent;
  // }, [text]);

  const handleFileChange = (e) => {    
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {            
      const temp = document.createElement("div");
      temp.innerHTML = e.target.result;        
      setText(temp.textContent);
    }
    fileReader.readAsText(file);
  }

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <Preview text={text} searchKey={searchKey}/>
      <input type="text" onChange={handleSearchChange} />
      <br/>
      <input type="file" onChange={handleFileChange} />      
    </div>
  );
}
