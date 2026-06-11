import { useState } from 'react'

function Toggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h2>Toggle Example</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Details' : 'Show Details'}
      </button>

      {isOpen && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <p>This content toggles on and off!</p>
          <p>Click the button above to hide it again.</p>
        </div>
      )}
    </div>
  )
}

export default Toggle
