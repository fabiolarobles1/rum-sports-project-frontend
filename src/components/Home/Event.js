import React  from 'react'
import './Event.css'

export default function Event({date, imgSrc, eventName, eventPlace}) {
    
        return (
           
               <div className='event-container'>
                <div className='date'> {date}</div>          
                   <img src={imgSrc}  alt= "picture" className='picture' />  
               <div >{eventName}</div>
               <div >@ {eventPlace}</div>
            </div>
        )
    
}
