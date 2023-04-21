import {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import NewsItem from "./components/NewsItem";
import PaginatedItems from "./components/PaginatedItems"
import { SpinnerRoundOutlined } from 'spinners-react';
import './App.css';

function App() {
  // create a dynamic variable called toast with useState (setToast is the function to change toast)
  const[toast, setToast] = useState([]);
  //Handle the input the user typed in in the searchbar(in NavBar Component)
  const [userInput, setUserInput] = useState("");
  // Store url we want to get our data from in the variable url
  const baseUrl = "http://hn.algolia.com/api/v1/search_by_date?hitsPerPage=50&page=1";
  const [url,setUrl] = useState(baseUrl);
  const [spinner, setSpinner] = useState(true);

 
  // function to get data from url (in async/await-Syntax, the are alternatives like axios or .then .catch)
  const getToasts = async () => {
    // try to get data
    try{
      // Get data from url and store it in res variable (still in json-format)
      const res = await fetch(url);
      // convert from json-format to javascript-object (so that we can work on it in javascript)
      const data = await res.json();
      // store only the hits part of the object in toast (with calling the setToast-function)
      setToast(data.hits);
      setSpinner(false)
      if(data.hits.length == 0){
      alert("No results found.")        
      }
    }
    // if it doesnt succeed, catch the error(!) and print it to the console
    catch(error){
      console.log(error);
      alert ("Server error: There is a problem with your search. Please try again")

    }
  }

  //call getTaost-function with use Effect (with empty dependency so that it only executes once)
  useEffect(() => {
    setTimeout(()=>{getToasts()},1000) 
  },[url])
  
//title, story_url, points, author, created_at
  return (
    <div className="App">
      {/* Export  */}
      <NavBar userInput={userInput} setUserInput={setUserInput} setUrl={setUrl} baseUrl={baseUrl} spinner={spinner} setSpinner={setSpinner}/>
        {/* <PaginatedItems /> */}
        <ol className="news-list">
          {/* Map over the data in toast (that contain our articles) and return something for every article(item) */}
          <SpinnerRoundOutlined className="spinner" enabled={spinner}/>
          {toast.map((item)=>{
            //sometimes the value of item.title is "null", so if that is the case, use item.story_title instead, so the title is not empty
            let actualTitle = item.title;
            if (actualTitle === null) actualTitle = item.story_title
            //same for the url
            let actualUrl = item.url;
            if (actualUrl== null) actualUrl = item.story_url
            
            return (
              //Add the component NewsItem to our HTML and also export certain parts of our data to the NewsItem (so that we can work on it there)
              spinner?"":<NewsItem title={actualTitle} story_url={actualUrl} author={item.author} created_at={item.created_at} />
            )
          }
          )}

        </ol>

    </div>
  );
}

export default App;
