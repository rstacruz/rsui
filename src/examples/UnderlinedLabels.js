import '../styles.css'
import React from 'react'
import CSS from './UnderlinedLabels.module.scss'
import ExampleBlock from './ExampleBlock'

export default function UnderlinedLabels() {
  return (
    <div>
      <ExampleBlock title='Underlined style' description={<></>}>
        <label className={CSS.underlineField}>
          <input
            type='email'
            className={CSS.input}
            placeholder='Enter an email address'
          />
          <span className={CSS.label}>Underlined style</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Small label font'
        description={
          <>
            Adjust <code>font-size-small</code> to change how much the label
            should shrink.
          </>
        }
      >
        <label className={CSS.smallFontField}>
          <input className={CSS.input} placeholder='Enter text' />
          <span className={CSS.label}>Small label font</span>
        </label>
      </ExampleBlock>
    </div>
  )
}
