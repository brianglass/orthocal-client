import React from 'react'

const Reading = ({reading}) => (reading.passage && 
    <section className="passage">
        <h4>{reading.display} ({reading.source}{reading.description.length > 0 ? `, ${reading.description}` : ""})</h4>
        {reading.passage.map(verse => (
            <p><span className="verse-number">{verse.verse}</span> {verse.content}</p>
        ))}
    </section>
)

export default Reading
