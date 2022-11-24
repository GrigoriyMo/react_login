import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [correctLogin, updateCorrectLogin] = useState('Operator');
  const [correctPassword, updateCorrectPassword] = useState('admin0');

  return (
    <div className="App">
     <Form correctLogin={correctLogin} correctPassword={correctPassword}></Form>
    </div>
  )
}

export default App

