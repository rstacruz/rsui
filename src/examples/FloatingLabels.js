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
        description={
          <>
            Adjust <code>border-size</code> to make thinner fields.
          </>
        }
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
            Adjust <code>border-size-focused</code> to change the border size
            when the field is focused.
          </>
        }
      >
        <label className={CSS.thin2Field}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Growing border size</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='With prefixes'
        description={
          <>
            Set <code>prefix</code> and <code>suffix</code> to have items before
            or after the input box.
          </>
        }
      >
        <label className={CSS.prefixedField}>
          <span className={CSS.prefix}>$</span>
          <input className={CSS.input} placeholder='0' />
          <span className={CSS.suffix}>.00</span>
          <span className={CSS.label}>Amount</span>
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

      <ExampleBlock
        title='Custom color'
        description={
          <>
            You can adjust <code>border-color</code>, <code>label-color</code>,
            <code>border-color-focused</code>, and more.
          </>
        }
      >
        <label className={CSS.greenField}>
          <input className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Custom color</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Underlined style'
        description={
          <>
            Set <code>border-style: &quot;underline&quot;</code>.
          </>
        }
      >
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

      <ExampleBlock
        title='Using textareas'
        description={<>It works with both inputs and textareas alike.</>}
      >
        <label className={CSS.field}>
          <textarea className={CSS.input} placeholder='Say something' />
          <span className={CSS.label}>Using textareas</span>
        </label>
      </ExampleBlock>

      <ExampleBlock
        title='Long labels'
        description={<>Labels will be truncated with ellipses if necessary.</>}
      >
        <label className={CSS.field}>
          <input className={CSS.input} placeholder='Enter text' />
          <span className={CSS.label}>
            This is an extremely long label that should be truncated with
            ellipses as it runs on and on seemingly without end
          </span>
        </label>
      </ExampleBlock>
    </div>
  )
}
