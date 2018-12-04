import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import Buttons from './Buttons'

function App() {
  return (
    <div className="App">
      <h2>Floating labels</h2>
      <Buttons />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
