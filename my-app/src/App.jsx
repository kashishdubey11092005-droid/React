import { useState } from 'react'
import User from './User'
import Fruit from './Fruit'

export default function App() {
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
      <h1>Smart Saving Advisor</h1>
      <p>Save money for your better future</p>
      <input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Salary' />
      <input value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder='Expenses' />
      <button onClick={showAdvice}>Get Advice</button>
      {advice && <p>{advice}</p>}
      {advice && <p>Use your money wisely.</p>}
      <User />
      <Fruit />
    </div>
  )
}
