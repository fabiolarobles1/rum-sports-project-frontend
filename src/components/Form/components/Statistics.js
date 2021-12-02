import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ statistics, onChange }) => {
    return (
        <>
            {statistics.map((stat) => 
            <Statistic key={stat.id} statistic = {stat} onChange = {onChange}/>
            )}
        </>
    )
}

export default Statistics
