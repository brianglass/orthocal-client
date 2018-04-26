import React from 'react'
import Day from './day'

const Orthocal = ({state, fetchDay}) => {
    let nextDay = new Date(state.date.getTime());
    nextDay.setDate(nextDay.getDate() + 1);

    let previousDay = new Date(state.date.getTime());
    previousDay.setDate(previousDay.getDate() - 1);

    return (
        <div>
            <button onClick={() => fetchDay(previousDay)}>Previous Day</button>
            <button onClick={() => fetchDay(nextDay)}>Next Day</button>
            <Day day={state.day}/>
        </div>
    )
};

export default Orthocal
