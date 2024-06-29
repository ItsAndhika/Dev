import React from 'react'
import './style.css'

const ColorCard = ({color, setColor}) => {
  return (
    <div id='cardContainer' style={{backgroundColor: `${color}`}}>
        <h2>{color === '' ? 'Empty value' : color}</h2>
    </div>
  )
}

export default ColorCard
