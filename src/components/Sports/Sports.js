import React, { Component } from 'react'
import history from "../../Routing/history";

import atletismo from '../../assets/Pictures/Sports/Atletismo.png'
import baseball from '../../assets/Pictures/Sports/Baseball.png'
import basket from '../../assets/Pictures/Sports/Basketball.png'
import cheer from '../../assets/Pictures/Sports/Cheerleading.png'
import judo from '../../assets/Pictures/Sports/Judo.png'
import lucha from '../../assets/Pictures/Sports/Lucha.png'
import soccer from '../../assets/Pictures/Sports/Soccer.png'
import swim from '../../assets/Pictures/Sports/Swimming.png'
import taekwondo from '../../assets/Pictures/Sports/Taekwondo.png'
import tennis from '../../assets/Pictures/Sports/Tennis.png'
import volley from '../../assets/Pictures/Sports/Volleyball.png'
import weight from '../../assets/Pictures/Sports/WeightLifting.png'

import './Sports.css'

export default class Sports extends Component {
    render() {
        return (
            <div>
                <div className="sports-header">Sports</div>
                <div className='sports-container'>
                    <div className='grid-item'>
                        <img src={atletismo} alt='atletismo' />
                        Atletismo
                    </div>
                    <div className='grid-item' onClick={() => history.push("/sports/baseball")}>
                        <img src={baseball} alt='baseball' />
                        Baseball
                    </div>
                    <div className='grid-item'>
                        <img src={basket} alt='basket' />
                        Basketball
                    </div>
                    <div className='grid-item'>
                        <img src={cheer} alt='cheer' />
                        Cheerleading
                    </div>
                    <div className='grid-item'>
                        <img src={judo} alt='judo' />
                        Judo
                    </div>
                    <div className='grid-item'>
                        <img src={lucha} alt='lucha' />
                        Lucha
                    </div>
                    <div className='grid-item'>
                        <img src={soccer} alt='soccer' />
                        Soccer
                    </div>
                    <div className='grid-item'>
                        <img src={swim} alt='swim' />
                        Swimming
                    </div>
                    <div className='grid-item'>
                        <img src={taekwondo} alt='taekwondo' />
                        Taekwondo
                    </div>
                    <div className='grid-item'>
                        <img src={tennis} alt='tennis' />
                        Tennis
                    </div>
                    <div className='grid-item'>
                        <img src={volley} alt='volley' />
                        Volleyball
                    </div>
                    <div className='grid-item'>
                        <img src={weight} alt='weight' />
                        Weightlifting
                    </div>
                </div>
            </div>
        )
    }
}
