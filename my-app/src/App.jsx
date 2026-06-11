// import { useState } from 'react'
// import Counter from './Counter'

// function App() {
//   const [fruit, setFruit] = useState('apple')

//   const handleFruit = () => {
//     setFruit('banana')
//   }

//   return (
//     <div>
//       <h1>state in react jsx</h1>
//       <h2>Fruit: {fruit}</h2>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//       <Counter />
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import User from './User'

function App() {
  const [display, setDisplay] = useState(true)

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#065f46', marginBottom: '20px' }}>Toggle in React JSX</h1>
      
      <button 
        onClick={() => setDisplay(!display)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '30px'
        }}
      >
        {display ? 'Hide Content' : 'Show Content'}
      </button>

      {display && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '18px', color: '#333' }}>✓ This is displayed when the toggle is on.</p>
          <h2 style={{ color: '#065f46', marginTop: '20px' }}>Kashish Dubey</h2>
          <User />
        </div>
      )}

      {!display && (
        <p style={{ fontSize: '18px', color: '#666', marginTop: '30px' }}>Content is hidden. Click "Show Content" to display it.</p>
      )}
    </div>
  )
}

export default App
