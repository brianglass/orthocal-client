import React from 'react'
import Day from './day'

const Orthocal = ({state, fetchDay, setJurisdiction}) => {
		const date = new Date(state.date);

    let nextDay = new Date(state.date);
    nextDay.setDate(nextDay.getDate() + 1);

    let previousDay = new Date(state.date);
    previousDay.setDate(previousDay.getDate() - 1);

    return (
        <section className="orthocal">
            <button onClick={() => fetchDay(previousDay)}>Previous Day</button>
            <button onClick={() => fetchDay(new Date())}>Today</button>
            <button onClick={() => fetchDay(nextDay)}>Next Day</button>

            <br/>

            <label>
                <input type="radio" name="jurisdiction" value="oca" onChange={() => {setJurisdiction("oca"); fetchDay(date);}} checked={state.jurisdiction === 'oca'}/>
                oca
            </label>
            <label>
                <input type="radio" name="jurisdiction" value="rocor" onChange={() => {setJurisdiction("rocor"); fetchDay(date);}} checked={state.jurisdiction === 'rocor'}/>
                rocor
            </label>

            <Day day={state.day} date={date}/>
        </section>
    )
};

export default Orthocal
