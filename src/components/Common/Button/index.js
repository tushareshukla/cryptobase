import "./styles.css"
import React from 'react'

export default function Button({text, onClick, outlined}) {
  return (
    <div className={outlined ? "outlined-btn" : "btn"} onClick={() => onClick()}>
        {text}
        </div>
  )
}
