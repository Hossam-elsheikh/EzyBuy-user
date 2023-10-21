import React from 'react'
import classes from './container.module.css'
const Container = (props) => {
  return (
    <div className={`container ${classes.cont}`}>{props.children}</div>
  )
}

export default Container