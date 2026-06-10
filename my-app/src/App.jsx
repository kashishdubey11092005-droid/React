import { useState } from 'react'
import Counter from './Counter'

function App() {
  const [fruit, setFruit] = useState('apple')

  const handleFruit = () => {
    setFruit('banana')
  }

  return (
    <div>
      <h1>state in react jsx</h1>
      <h2>Fruit: {fruit}</h2>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter />
    </div>
  )
}

export default App

