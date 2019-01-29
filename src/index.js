import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import FloatingLabels from './examples/FloatingLabels'
import UnderlinedLabels from './examples/UnderlinedLabels'
import RadioButtons from './examples/RadioButtons'
import Section from './examples/Section'

function App() {
  return (
    <div className='App'>
      <Section title='Floating labels'>
        <FloatingLabels />
      </Section>
      <Section title='Underlined labels'>
        <UnderlinedLabels />
      </Section>
      <Section title='Radio buttons'>
        <RadioButtons />
      </Section>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
