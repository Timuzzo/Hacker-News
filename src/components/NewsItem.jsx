//import a library that gives us the possibility to display the past time a article was posted https://www.npmjs.com/package/react-time-ago
import ReactTimeAgo from 'react-time-ago'
import { useEffect, useState } from 'react'

export default function NewsItem({title, story_url, points, author, created_at, created_at_i, date}){

    const [random, setRandom] = useState(0)
    
    useEffect(() => {
        setRandom(Math.floor(Math.random() * 999))
      },[])

    // Display imported data from App.js on our homepage in an li tag (by exporting/return it to App.js)
    return (
        <div>
            <li key={title}> Title: {title} Story-URL: <a href={story_url}>See Article</a> <br /> Points: {random} Author: {author} Created: <ReactTimeAgo date={created_at} locale="en-US"/></li>
        </div>
    )
}