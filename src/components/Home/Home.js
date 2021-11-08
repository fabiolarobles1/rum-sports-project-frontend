import React, { Component } from 'react'
import Event from './Event'
import inter from '../../assets/Pictures/inter.jpg'
import iupi from '../../assets/Pictures/uprrp.png'
import rum from '../../assets/Pictures/uprm.png'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className='title-container'>
                <div className='title'>
                    UPRM ATHLETICS
                </div>
            </div>
            <div className='events-wrap'>
            <table className="events" cellSpacing='0'>
                <tr>
                   <th>Events</th> 
                </tr>
              
                <tr>
                    <td><Event date= '01/03/2022' imgSrc={inter} eventName='Male Baseball' eventPlace='Hiram Bithorn'/></td>
                </tr>

                <tr>
                    <td><Event date= '14/01/2022' imgSrc={iupi} eventName='Ladies Volleyball' eventPlace='Gallera'/></td>
                </tr>

                <tr>
                    <td><Event date= '11/03/2021' imgSrc={rum} eventName='Taekwondo' eventPlace='Palacio'/></td>
                </tr>

                <tr>
                    <td><Event date= '01/03/2022' imgSrc={inter} eventName='Male Baseball' eventPlace='Hiram Bithorn'/></td>
                </tr>

                <tr>
                    <td><Event date= '14/01/2022' imgSrc={iupi} eventName='Ladies Volleyball' eventPlace='Gallera'/></td>
                </tr>

                <tr>
                    <td><Event date= '11/03/2021' imgSrc={rum} eventName='Taekwondo' eventPlace='Palacio'/></td>
                </tr>
    
            </table>
            </div>
            </>
        )
    }
}
