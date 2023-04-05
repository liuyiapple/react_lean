import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('home')
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName('首页')}>SET</button>
    </>
  )
}
export default Form
