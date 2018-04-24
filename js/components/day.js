import React from 'react'

const Day = ({day}) => (
  <div class="day">
    <h1>{day.titles[0]}</h1>
    <p>{day.fast_level_desc}</p>
  </div>
)

export default Day
