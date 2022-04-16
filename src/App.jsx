import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Todo from "./components/todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    


  <div className='app'>
    <h1>my todo list</h1>
    <Todo/>
  </div>


    
  )
}

export default App
