
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* < Card name="Aniket "/> */}
      <div className="bg-red-500 text-white text-3xl font-bold p-10">
      If this text is red, Tailwind is working! 🚀
    </div>
    </>
  )
}

export default App
