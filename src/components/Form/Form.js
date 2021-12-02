import React from 'react'
import { useState } from 'react'
import history from "../../Routing/history";
import Statistics from './components/Statistics'
import './Form.css'


const Form = () => {
    const [ statistics, setStatistics] = useState([
        { id: 1,
          text: "First Name: ",
          value: ""
        },
        { id: 2,
          text: "Last Name: ",
          value: ""
        },
        { id: 3,
          text: "Athlete's Number: ",
          value: ""
        },
        { id: 4,
          text: "Home Runs: ",
          value: ""
        },
        { id: 5,
          text: "Runs Batted In: ",
          value: ""
        },
        { id: 6,
          text: "Number of Times on Base: ",
          value: ""
        },
        { id: 7,
          text: "Number of Plate Appereances:",
          value: ""
        },
        { id: 8,
          text: "Number of Hits: ",
          value: ""
        },
        { id: 9,
          text: "Number of Time at Bats: ",
          value: ""
        }

    ])

    const change_stat = (id, val) => {
        setStatistics(
            statistics.map((stat) => 
                stat.id === id ? { ...stat, value: val} : stat
            )
        )
    }

    const submit_form = (e) => {
      e.preventDefault()
      const reqJSON = JSON.stringify(statistics)
      history.push("/")
      
      console.log(reqJSON)
    }

    return (
      <div>
        <form className='form-container'
            onSubmit = {submit_form}>
            <h2 style={{cursor:'default', padding: '0px 0px 5px 10px'}}>
              New Statistics Submission
            </h2>
            <Statistics statistics = { statistics } onChange = {change_stat} />
            <input 
            type='submit' 
            value='Submit Form'
            className = 'btn'/>
        </form>
      </div>
    )
}

export default Form

