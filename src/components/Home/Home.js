import React, { Component } from 'react'
import New from './New'
import Event from './Event'
import { HomeEvents } from './HomeData'
import { HomeNews } from './HomeData';

import './Home.css'

export default class Home extends Component {
    render() {
        localStorage.setItem("authentication", false)
        return (
            <>
                <div className='header-container'>
                    <div className='header-title'>
                        UPRM ATHLETICS
                    </div>
                    <div className='table-title'>
                        EVENTS
                    </div>
                </div>
                <div className='events-wrap'>
                    <table className="events" cellSpacing='0'>
                        {HomeEvents.map((item) => (
                            <tr>
                                <td><Event date={item.date} imgSrc={item.imgSrc} eventName={item.eventName} eventPlace={item.eventPlace} /></td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="news-wrap">
                    <table className="news" cellSpacing='0'>
                        {HomeNews.map((item) => (
                            <tr>
                                <td><New title={item.title} imgSrc={item.imgSrc} text={item.text} colorBackground={item.colorBackground} />
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>

            </>
        )
    }
}
