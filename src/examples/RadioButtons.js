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
        <label className={CSS.label}>
          <input type='radio' name='one' value='c' disabled />
          <span>Disabled</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Alternate settings'
        description={
          <>
            Increased <code>size</code>, <code>border-size</code> and{' '}
            <code>inset-size</code>
          </>
        }
      >
        <label className={CSS.bigLabel}>
          <input type='radio' name='one' value='a' />
          <span>Apple</span>
        </label>
        <label className={CSS.bigLabel}>
          <input type='radio' name='one' value='b' />
          <span>Banana</span>
        </label>
        <label className={CSS.bigLabel}>
          <input type='radio' name='one' value='c' disabled />
          <span>Disabled</span>
        </label>
      </ExampleBlock>
    </div>
  )
}

export default RadioButtons
