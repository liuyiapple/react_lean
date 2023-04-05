import { useState } from 'react'

const Home = () => {
  const [num, setNum] = useState('')
  return (
    <>
      <h1>{num}</h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
    </>
  )
}
export default Home
