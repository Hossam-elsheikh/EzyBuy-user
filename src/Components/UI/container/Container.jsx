import React from 'react'
import classes from './container.module.css'
const Container = ({children}) => {
  return (
    <div className={`container ${classes.cont}`}>{children}</div>
  )
}

export default Container