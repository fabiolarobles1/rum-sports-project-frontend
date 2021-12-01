import React from 'react'
import './Teampage.css';


export default function Player({ data }) {
    return (
        <>
            <div className='player-container'>
                <img src={data.link} className="player-photo" />
            </div>
            <div className='stats-container'>

                <li className="stats">
                    < h4>Stats:</h4>
                    <div>AVG: {data.avg}</div>
                    <div>OBP: {data.obp}</div>
                    <div>HR: {data.hr}</div>
                    <div>RBI: {data.rbi}</div>
                </li>

            </div>
        </>
    )
}

