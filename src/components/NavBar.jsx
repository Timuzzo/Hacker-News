import '../App.css'
import logo from './img/W.png';

export default function NavBar({userInput, setUserInput, setUrl, baseUrl, setSpinner, setNotFound}) {

    function handleClick(e) {
        e.preventDefault()
        setNotFound(false)
        const searchUrl = `http://hn.algolia.com/api/v1/search_by_date?query=${userInput}&tags=story` 
        if(userInput === "") {
            alert("Type something in the search field")
        }
        else {
            setSpinner(true)
            setUrl(searchUrl)
        }
        
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    return(
        <div className="NavBar">
            <div class="NavBar-left" onClick={()=>{
                setUrl(baseUrl);
                setUserInput("");
            }}><img src={logo}/><p>Checker News</p></div>
            <div id="we">by Anton | Timofey | Daniel O. | Puri</div>
            <form id="searchBar">
                <input type="text" value={userInput} onChange={(e)=>handleChange(e)}></input>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}