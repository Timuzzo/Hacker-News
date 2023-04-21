import { SpinnerRoundOutlined } from 'spinners-react';

export default function NavBar({userInput, setUserInput, setUrl, baseUrl, spinner, setSpinner}) {


function handleClick(e) {
    e.preventDefault();
    const searchUrl = `http://hn.algolia.com/api/v1/search_by_date?query=${userInput}&tags=story` 
    setSpinner(true)
    setUrl(searchUrl)
}
    
const handleChange = (e) => {
    
    let value = e.target.value;
    setUserInput(value);
}
return(
    <div>
        <button onClick={()=>{
            setUrl("http://hn.algolia.com/api/v1/search_by_date?hitsPerPage=50&page=1");
            setUserInput("");
        }}>Home</button>
        <form>
            <input type="text" value={userInput} onChange={(e)=>handleChange(e)}></input>
            <button onClick={handleClick}>Search</button>
        </form>
        <SpinnerRoundOutlined enabled={spinner}/>
    </div>
    
)
 
}