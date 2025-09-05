// To run this type in CLI: npm run dev
// Go to http://localhost:3000/
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world from React!
    </h1>
  )
}

export default App
