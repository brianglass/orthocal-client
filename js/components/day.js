import React from 'react'
import Reading from './reading'

const Day = ({day}) => (
    <div class="day">
        <h1>{day.titles[0]}</h1>
        <p>{day.fast_level_desc}{day.fast_exception.length > 0 ? ` - ${day.fast_exception}` : ""}</p>
        {day.readings.map(reading => (
            <Reading reading={reading}/>
        ))}
    </div>
)

export default Day
