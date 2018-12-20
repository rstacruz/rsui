import '../styles.css'
import React from 'react'
import CSS from './FloatingLabels.module.scss'
import ExampleBlock from './ExampleBlock'

export default function FloatingLabels() {
  return (
    <div>
      <ExampleBlock title='Default settings'>
        <label className={CSS.field}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Default settings</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Thin 1px border'
        description={<>Adjust `border-size` to make thinner fields.</>}
      >
        <label className={CSS.thinField}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Thin 1px border</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Growing border size'
        description={
          <>
            Adjust `border-size-focused` to change the border size. when the
            field is focused.
          </>
        }
      >
        <label className={CSS.thin2Field}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Growing border size</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='With validation (email)'
        description='Try entering an invalid email here to see the invalid style.'
      >
        <label className={CSS.field}>
          <input
            type='email'
            className={CSS.input}
            placeholder='Enter an invalid email'
          />
          <span className={CSS.label}>With validation</span>
        </label>
      </ExampleBlock>

      <ExampleBlock title='Custom color'>
        <label className={CSS.greenField}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Custom color</span>
        </label>
      </ExampleBlock>

      <ExampleBlock title='Underlined style'>
        <label className={CSS.underlineField}>
          <input
            type='email'
            className={CSS.input}
            placeholder='Enter an email address'
          />
          <span className={CSS.label}>Underlined style</span>
        </label>
      </ExampleBlock>

      <ExampleBlock title='Small label font'>
        <label className={CSS.smallFontField}>
          <input className={CSS.input} placeholder='Enter text' />
          <span className={CSS.label}>Small label font</span>
        </label>
      </ExampleBlock>

      <ExampleBlock title='Using textareas'>
        <label className={CSS.field}>
          <textarea className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Using textareas</span>
        </label>
      </ExampleBlock>
    </div>
  )
}
