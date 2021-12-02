import React from 'react'
const Statistic = ({ statistic, onChange }) => {
    
    return (
        <div 
        className = 'statistic'>
            <label>{statistic.text}</label>
            <input 
                type = 'text'
                value = {statistic.blank}
                onChange = {(e) => onChange(statistic.id, e.target.value)}
            />
            
        </div>
    )
}

export default Statistic
