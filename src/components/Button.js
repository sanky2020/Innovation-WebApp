import React from 'react'
import '../styles/Button.css'

function Button({text, icon}) {
  return (
        <button className='btn'>{text} {icon}</button>
  )
}

export default Button