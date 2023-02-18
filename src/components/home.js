import React, {useState} from 'react'

export default function Home(props) {
  const [name, setname] = useState("Xai")

  const handleClick = () => {
    props.setname("Beer")
    setname("Dy")
  }

  return (
    <div>
      {name}
      {props.firstname}
      {props.firstname}
      {props.firstname}
      {props.firstname}
      {props.firstname}
      {props.firstname}
      {props.firstname}

      <button onClick={handleClick}>Change</button>
    </div>
  )
}
