import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col text-center items-center w-full h-screen bg-black text-white'>
        <h1 className='text-3xl'>Hello World</h1>
        <Button btntext='Click Me' />
      </div>
    </>
  )
}

export default App
