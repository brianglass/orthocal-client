import React from 'react'
import Reading from './reading'

const Day = ({day}) => (
    <div className="day">
        <h2>{day.titles[0]}</h2>
        <p>{day.fast_level_desc}{day.fast_exception.length > 0 ? ` - ${day.fast_exception}` : ""}</p>

        {day.feasts &&
          <section className="feasts">
            <h3>Feasts</h3>
            <ul>
            {day.feasts.map(feastName => <li>{feastName}</li>)}
            </ul>
          </section>
        }

        {day.saints &&
          <section className="commemorations">
            <h3>Commemorations</h3>
            <ul>
            {day.saints.map(saintName => <li>{saintName}</li>)}
            </ul>
          </section>
        }

        <section className="readings">
            <h3>Readings</h3>
            {day.readings.map(reading => (
                <Reading reading={reading}/>
            ))}
        </section>
    </div>
)

export default Day
