import React from 'react'
import ExampleBlock from './ExampleBlock'
import CSS from './RadioButtons.module.scss'

const RadioButtons = () => {
  return (
    <div>
      <ExampleBlock title='Default settings'>
        <label className={CSS.label}>
          <input type='radio' name='one' value='a' />
          <span>Apple</span>
        </label>
        <label className={CSS.label}>
          <input type='radio' name='one' value='b' />
          <span>Banana</span>
        </label>
      </ExampleBlock>
    </div>
  )
}

export default RadioButtons
