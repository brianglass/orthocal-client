import React from 'react'
import Day from './day'

const Orthocal = ({state, fetchDay, setJurisdiction}) => {
    const today = new Date();

    let nextDay = new Date(state.date.getTime());
    nextDay.setDate(nextDay.getDate() + 1);

    let previousDay = new Date(state.date.getTime());
    previousDay.setDate(previousDay.getDate() - 1);

    const jurisdictionHandler = jurisdiction => {
        setJurisdiction(jurisdiction);
        fetchDay(state.date);
    }

    return (
        <section className="orthocal">
            <h1>Daily Readings</h1>

            <button onClick={() => fetchDay(previousDay)}>Previous Day</button>
            <button onClick={() => fetchDay(today)}>Today</button>
            <button onClick={() => fetchDay(nextDay)}>Next Day</button>

            <br/>
            <br/>

            <label>
                <input type="radio" name="jurisdiction" value="oca" onChange={() => {setJurisdiction("oca"); fetchDay(state.date);}} checked={state.jurisdiction === 'oca'}/>
                OCA
            </label>
            <label>
                <input type="radio" name="jurisdiction" value="rocor" onChange={() => {setJurisdiction("rocor"); fetchDay(state.date);}} checked={state.jurisdiction === 'rocor'}/>
                ROCOR
            </label>

            <Day day={state.day} date={state.date}/>
        </section>
    )
};

export default Orthocal
