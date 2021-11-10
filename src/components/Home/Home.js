import React, { Component } from 'react'
import Event from './Event'
import inter from '../../assets/Pictures/inter.jpg'
import iupi from '../../assets/Pictures/uprrp.png'
import rum from '../../assets/Pictures/uprm.png'
import './Home.css'
import New from './New'

export default class Home extends Component {
    render() {
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
            <div className="news-wrap">
                <table className="news" cellSpacing='0'>
                    <tr>
                        <td><New title='... Just in' imgSrc={rum} text="BLAHDdsjfhduhyfadfdhfjdhf 
                                                                        udffdjfhdjfhdjfhdfhdjfhdjfhjn
                                                                        cdjchdjcjdchdcuehwfeieifdsifdsfkj
                                                                        dsfewifruewifudicjdkfjdsfierfuewiru
                                                                        feifdjfdjfdkjfdif" 
                                colorBackground={false}/>
                        </td>
                    </tr>
                    <tr>
                        <td><New title='... Just in' imgSrc={rum} text="BLAHDdsjfhduhyfadfdhfjdhf 
                                                                        udffdjfhdjfhdjfhdfhdjfhdjfhjn
                                                                        cdjchdjcjdchdcuehwfeieifdsifdsfkj
                                                                        dsfewifruewifudicjdkfjdsfierfuewiru
                                                                        feifdjfdjfdkjfdif" 
                                colorBackground={true}/>
                        </td>
                    </tr>
                    <tr>
                        <td><New title='... Just in' imgSrc={rum} text="BLAHDdsjfhduhyfadfdhfjdhf 
                                                                        udffdjfhdjfhdjfhdfhdjfhdjfhjn
                                                                        cdjchdjcjdchdcuehwfeieifdsifdsfkj
                                                                        dsfewifruewifudicjdkfjdsfierfuewiru
                                                                        feifdjfdjfdkjfdif" 
                                colorBackground={false}/>
                        </td>
                    </tr>
                    <tr>
                        <td><New title='... Just in' imgSrc={rum} text="BLAHDdsjfhduhyfadfdhfjdhf 
                                                                        udffdjfhdjfhdjfhdfhdjfhdjfhjn
                                                                        cdjchdjcjdchdcuehwfeieifdsifdsfkj
                                                                        dsfewifruewifudicjdkfjdsfierfuewiru
                                                                        feifdjfdjfdkjfdif" 
                                colorBackground={true}/>
                        </td>
                    </tr>
                </table>
            </div>
            
            </>
        )
    }
}
