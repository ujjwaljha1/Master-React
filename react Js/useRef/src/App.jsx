import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './Topica/Basics'
import Counter from './Topica/Counter'
import PreviousState from './Topica/PreviousState'
import Timer from './Topica/Timer'
import TrackComponent from './Topica/TrackComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Basic/>
      <Counter/>
      <PreviousState/>
      <Timer/>
      <TrackComponent/>
    </>
  )
}

export default App
