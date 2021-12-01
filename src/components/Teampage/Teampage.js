import React, { Component, useState } from 'react'
import Sidebar from './SidebarT';
import './Teampage.css';
import { Data } from '../BaseballData'
import Player from './Player';


export default function Teampage() {
    const [currentSelected, setCurrentSelected] = useState(0)
    console.log(currentSelected)
    return (
        <div>
            <Sidebar className="sidebar-container" data={Data} updateState={setCurrentSelected} />
            <div className='teampage-title-container'>
                <div>UPRM Baseball Team</div>
            </div>

            <Player data={Data[currentSelected]} />
        </div>
    )
}

