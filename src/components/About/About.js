import React, { Component } from 'react'
import AMOCOLEGIO from '../../assets/Pictures/amo-colegio.png'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='about-header'>
                    OUR PURPOSE
                </div>
                <div>
                    <div className='about-content'>
                        RUM Sports is a groundbreaking initiative at the University of Puerto Rico at Mayaguez, 
                        that seeks to empower all of its athletes by showcasing all their achievements, 
                        and by fostering a sporting community in the campus. 
                        We desire to show the greater college community how capable the athletes at UPRM are, 
                        and by doing so allowing them to continue thriving and acquiring new opportunities. 
                                      
                        For more information about athletics, visit the department page 
                        <a href = "https://www.uprm.edu/p/actividadesatleticas/nuestro_departamento"  target="_blank" rel="noopener noreferrer"> here.</a>
                    </div>
                </div>
                <img src={AMOCOLEGIO} alt="YO AMO AL COLEGIO" className='aboutPic'/>
            </div>
        )
    }
}
