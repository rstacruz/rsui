import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import CSS from './Buttons.module.scss'

function Buttons() {
  return (
    <div>
      <label className={CSS.field}>
        <input className={CSS.input} placeholder="Say something" />
        <span className={CSS.label}>Default settings</span>
      </label>

      <label className={CSS.field}>
        <input
          type="email"
          className={CSS.input}
          placeholder="Enter an invalid email"
        />
        <span className={CSS.label}>With validation</span>
      </label>

      <label className={CSS.greenField}>
        <input className={CSS.input} placeholder="Say something" />
        <span className={CSS.label}>Custom color</span>
      </label>

      <label className={CSS.thinField}>
        <input className={CSS.input} placeholder="Say something" />
        <span className={CSS.label}>Thin 1px border</span>
      </label>

      <label className={CSS.underlineField}>
        <input
          type="email"
          className={CSS.input}
          placeholder="Enter an email address"
        />
        <span className={CSS.label}>Underlined style</span>
      </label>

      <label className={CSS.smallFontField}>
        <input className={CSS.input} placeholder="Enter text" />
        <span className={CSS.label}>Small label font</span>
      </label>

      <label className={CSS.field}>
        <textarea className={CSS.input} placeholder="Say something" />
        <span className={CSS.label}>Using textareas</span>
      </label>
    </div>
  )
}

export default Buttons
