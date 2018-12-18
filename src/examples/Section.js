import React from 'react'
import CSS from './Section.module.scss'

const Section = ({ title, children }) => {
  return (
    <section>
      <details open className={CSS.details}>
        <summary className={CSS.summary}>
          <h2 className={CSS.heading}>{title}</h2>
        </summary>
        <div className={CSS.body}>{children}</div>
      </details>
    </section>
  )
}

export default Section
