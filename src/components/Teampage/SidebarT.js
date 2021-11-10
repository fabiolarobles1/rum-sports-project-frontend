import React from 'react'
import './SidebarT.css';

    function SidebarT({data}){
        
        return(
        <div className="SidebarT" >
            <h2> Roster</h2>
            <ul className="SidebarTList">
                {data.map((val,key)=>{
                    return (
                         <li key={key}
                        className="row"
                        >
                            <div>{"#"}{val.number} {val.name} {val.lastname} </div>{" "}
                        </li>
                    );
                })}
            </ul>
        </div>
            );
}
export default SidebarT