import React, { Component } from 'react'
import Sidebar from './SidebarT';
import './Teampage.css'; 
import  {Data} from '../BaseballData'

const baseballs =< > 
                {Data.map((val,key)=>{
                    if(val.link){
                       return (
                           <li key={key} className="stats">
                             < h4>Stats:</h4>  
                            <div>AVG: {val.avg}</div>
                            <div>OBP: {val.obp}</div>
                            <div>HR: {val.hr}</div>
                            <div>RBI: {val.rbi}</div>
                          </li>
                      );
                   }

       })}</>
export default class Teampage extends Component {
    render() {

        return (
                <>
                <Sidebar className="sidebar-container" data={Data}/>
                <div className='teampage-title-container'>
                    <div >
                    {Data.map((val,key)=>{
                             if(val.sport){
                                return (
                                       <div>{val.sport} </div>
                               );
                            }

                })}
                    </div>
                </div>

                <div className='player-container'>
                {Data.map((val,key)=>{
                             if(val.link){
                                return (
                                    <li key={key} className="player-container">
                                     <img src={val.link}className="player-photo" />{" "}
                                   </li>
                               );
                            }

                })}
                        
                </div>
                <div className='stats-container'>
                        {Data.map((val,key)=>{
                             if(val.sport=="UPRM Baseball Team"){
                                return (
                                    baseballs
                               );
                            }

                })}
                </div>
                </>
            
            
            
            
        )
    }
}
