import React, { useState } from 'react'
import Test from './components/Test'

export default function App() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7])
  const [data2, setdata2] = useState([
    { name: 'jack', age: 27 },
    { name: 'beer', age: 25 },
    { name: 'Dy', age: 20 },
    { name: 'Xai', age: 20 },
  ])
  return (
    <div>
      <Test data={data} data2={data2} />
    </div>
  )
}