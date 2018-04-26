import React from 'react'
import Day from './day'

const Orthocal = ({state, fetchDay}) => {
    const today = new Date();

    let nextDay = new Date(state.date.getTime());
    nextDay.setDate(nextDay.getDate() + 1);

    let previousDay = new Date(state.date.getTime());
    previousDay.setDate(previousDay.getDate() - 1);

    return (
        <section className="orthocal">
            <h1>Daily Readings</h1>

            <button onClick={() => fetchDay(previousDay)}>Previous Day</button>
            <button onClick={() => fetchDay(today)}>Today</button>
            <button onClick={() => fetchDay(nextDay)}>Next Day</button>

            <Day day={state.day}/>
        </section>
    )
};

export default Orthocal
