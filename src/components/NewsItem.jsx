//import a library that gives us the possibility to display the past time a article was posted https://www.npmjs.com/package/react-time-ago
import ReactTimeAgo from 'react-time-ago'
import { useEffect, useState } from 'react'
import '../App.css'
import upvote from './img/arrow-155-10.ico';

export default function NewsItem({title, story_url, author, created_at, counterListItem}){

    const [random, setRandom] = useState(0)
    
    useEffect(() => {
        setRandom(Math.floor(Math.random() * 999))
    },[])

    // Display imported data from App.js on our homepage in an li tag (by exporting/return it to App.js)
    return (
        <div className="news-item">
            <li key={title}>
                <div className="newsItem-firstLine" >
                    <div id="counterListItem">{counterListItem}.</div>
                    <img src={upvote} id="upvoteListItem" class="clickable" onClick={()=>{alert("How dare you?!")}}/>
                    <a href={story_url}>{title}</a>
                    <a id="underline" href={story_url}>See Article</a>
                    <br />
                </div>
                <div className="newsItem-secondLine">
                    {random}<p>&nbsp;points by&nbsp;</p>
                    {author}<p>&nbsp;| created&nbsp;</p>
                    <ReactTimeAgo date={created_at} locale="en-US"/>
                    <p class="clickable" onClick={()=>{alert("How dare you?!")}}>&nbsp;| hide&nbsp;</p>
                </div>
            </li>
        </div>
    )
}