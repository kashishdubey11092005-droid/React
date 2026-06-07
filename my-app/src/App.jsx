import { useState } from 'react'

export default function App() {
  const [salary, setSalary] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [advice, setAdvice] = useState('')

  const getAdvice = () => {
    let savings = salary - expenses
    if (savings < 5000) {
      setAdvice('Save in bank account')
    } else if (savings < 10000) {
      setAdvice('Invest in mutual funds')
    } else {
      setAdvice('Invest in stocks')
    }
  }

  return (
    <div>
      <h1>Smart Saving Advisor</h1>
      
      <input type="number" onChange={(e) => setSalary(Number(e.target.value))} placeholder="Salary" />
      <input type="number" onChange={(e) => setExpenses(Number(e.target.value))} placeholder="Expenses" />
      
      <button onClick={getAdvice}>Get Advice</button>
      
      {advice && <p>{advice}</p>}
    </div>
  )
}