import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Form></Form>
    </div>
  )
}

export default App
