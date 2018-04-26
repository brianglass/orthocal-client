import React from 'react'

const Reading = ({reading}) => (
    <div class="passage">
        <h2>{reading.display} ({reading.source}{reading.description.length > 0 ? `, ${reading.description}` : ""})</h2>
        {reading.passage.map(verse => (
            <p><span class="verse-number">{verse.verse}</span> {verse.content}</p>
        ))}
    </div>
)

export default Reading
