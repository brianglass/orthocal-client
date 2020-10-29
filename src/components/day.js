import React from 'react'
import Reading from './reading'
import dateFormat from 'dateformat'

const Day = ({day, date}) => (
		<div className="day">
				<h2>{dateFormat(date, "mmmm d, yyyy")}{day.titles &&
						<span>
						<br/>{day.titles[0]}
						</span>
				}
				</h2>
				<p>{day.fast_level_desc}{day.fast_level && day.fast_exception ? ` — ${day.fast_exception_desc}` : ""}</p>

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
						<h3>Readings (KJV)</h3>
						{day.readings.map(reading => (
								<Reading reading={reading}/>
						))}
				</section>
		</div>
)

export default Day
