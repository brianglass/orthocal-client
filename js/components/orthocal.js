import React from 'react'
import Day from './day'

const Orthocal = (props) => {
    let nextDay = new Date(props.state.date.getTime());
    nextDay.setDate(nextDay.getDate() + 1);

    let previousDay = new Date(props.state.date.getTime());
    previousDay.setDate(previousDay.getDate() - 1);

    return (
        <div>
            <button onClick={() => props.fetchDay(previousDay)}>Previous Day</button>
            <button onClick={() => props.fetchDay(nextDay)}>Next Day</button>
            <Day day={props.state.day}/>
        </div>
    )
};

export default Orthocal
