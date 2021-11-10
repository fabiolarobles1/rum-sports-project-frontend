import React  from 'react'
import './New.css'

export default function New({title, imgSrc, text, colorBackground}) {
    
        return (
           <div className="new-container" 
                style={colorBackground ? {backgroundColor:"#356B36"} : {backgroundColor: "rgb(248,248,248)"}}>
               <div className="title"> 
                    {title}
               </div>
               <div className="picture-wrap">
                  <img src={imgSrc} alt="picture" className="new-picture" />
                </div>
               <div className="text">
                    {text}
               </div>
           </div>
        )
    
}
