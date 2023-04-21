import '../App.css'

export default function NavBar({userInput, setUserInput, setUrl, baseUrl, spinner, setSpinner}) {

    function handleClick(e) {
        e.preventDefault()
        const searchUrl = `http://hn.algolia.com/api/v1/search_by_date?query=${userInput}&tags=story` 
        if(userInput === "") {
            console.log(`this is the if statement`)
            alert("Type something in the search field")
        }
        else {
            console.log("this is the else statement")
            setSpinner(true)
            setUrl(searchUrl)
        }
        
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    return(
        <div className="NavBar">
            <button onClick={()=>{
                setUrl(baseUrl);
                setUserInput("");
            }}>Home</button>
            <form>
                <input type="text" value={userInput} onChange={(e)=>handleChange(e)}></input>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}