import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import IncrementDecrement from './increment_Decrement.jsx'
import Toggle from './Toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
    <IncrementDecrement />
  </StrictMode>
)