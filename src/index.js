import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import FloatingLabels from './FloatingLabels'

function App() {
  return (
    <div className="App">
      <h2>Floating labels</h2>
      <FloatingLabels />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
