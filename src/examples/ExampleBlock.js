import React from 'react'
import CSS from './ExampleBlock.module.scss'

const ExampleBlock = ({ title, description, children }) => {
  return (
    <div className={CSS.root}>
      <div className={CSS.meta}>
        <h3 className={CSS.title}>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      <div className={CSS.body}>{children}</div>
    </div>
  )
}

export default ExampleBlock
