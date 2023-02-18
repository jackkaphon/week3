import React from 'react'

export default function Contact(props) {
  function handleClick() {
    props.setnum(20)
  }
  return (
    <div>
      {props.num}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
