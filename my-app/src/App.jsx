import { useState } from 'react'
import User from './User'
import Fruit from './Fruit'
import Login, { Profile, Settings } from './UserComponent'
import { Userkey } from './userKey'


export default function App() {
  const name = 'kashish dubey'
  const UserObject = {
    name: 'kashish dubey',
    email: 'kashish@example.com',
    age: 20,
  }

  const UserArray = ['kashish', 'dubey']
  let x = 10
  let y = 20
  // A Windows local file path cannot be used directly in browser JSX.
  // Put the image in public/ and use '/my-image.jpg' or use an external URL.
  let path = 'https://via.placeholder.com/300x180?text=Your+Image+Here'

  function fruit() {
    return 'apple'
  }

  function sum(a, b) {
    return a + b
  }

  function operation(a, b, op) {
    if (op === '+') return a + b
    else if (op === '-') return a - b
    else if (op === '*') return a * b
    return null
  }

  const [salary, setSalary] = useState('')
  const [expenses, setExpenses] = useState('')
  const [advice, setAdvice] = useState('')

  const showAdvice = () => {
    const savings = Number(salary) - Number(expenses)
    if (savings < 5000) setAdvice('Save in bank account.')
    else if (savings < 10000) setAdvice('Invest in mutual funds.')
    else setAdvice('Invest in stocks.')
  }

  return (
    <div>
      <h1>jsx with curly braces</h1>
      <h2>{name ? name : 'user not found'}</h2>
      <h3>{x + y}</h3>
      <h4>{fruit()}</h4>
      <h5>{sum(10, 20)}</h5>
      <h6>{operation(10, 20, '*')}</h6>
      <h1>{UserObject.name}</h1>
      <h1>{UserArray[0]}</h1>
      <input type='text' value={name} readOnly />
      <br />
      <img src={path} alt='local path' />

      <h1>Smart Saving Advisor</h1>
      <p>Save money for your better future</p>
      <input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Salary' />
      <input value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder='Expenses' />
      <button onClick={showAdvice}>Get Advice</button>
      {advice && <p>{advice}</p>}
      {advice && <p>Use your money wisely.</p>}
      <User />
      <Fruit />
      <Login />
      <Profile />
      <Settings />
      <p>User Key: {Userkey}</p>
    </div>
  )
}


























