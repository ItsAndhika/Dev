import React from 'react'
import './style.css'

const ColorInput = ({color, setColor}) => {
  // const handleChange = e => {
  //   setColor(e.target.value)
  // }

  return (
    <div>
      <input type="text" id='colorInput' placeholder='Insert color...' onChange={e => setColor(e.target.value)} value={color} />
    </div>
  )
}

export default ColorInput
