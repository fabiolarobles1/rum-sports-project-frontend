import React, { useCallback } from 'react'
import './SidebarT.css';

function SidebarT({ data, updateState }) {
    const handleSelected = useCallback(event => {
        updateState(event)
        console.log("clicked")
    }, [updateState])


    return (
        <div className="SidebarT" >
            <h2> Roster</h2>
            <ul className="SidebarTList">
                {data.map((val, key) => {
                    return (
                        <li key={key} className="row" onClick={() => handleSelected(key)}>
                            <div >{"#"}{val.number} {val.name} {val.lastname} </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default SidebarT

