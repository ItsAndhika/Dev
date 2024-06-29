import { React, useState } from 'react'
import './App.css'
import ColorCard from './components/ColorCard/ColorCard'
import ColorInput from './components/ColorInput/ColorInput'

const App = () => {
  const [color, setColor] = useState('')

  return (
    <main>
      <ColorCard color={color} setColor={setColor} />
      <ColorInput color={color} setColor={setColor} />
    </main>
  )
}

export default App
