import { useState } from 'react';
import './App.css'
import Alert from './Alert'

function App() {
  const [alertType, setAlertType] = useState(null);
  return (
    <>
      <div>
        <button type="success" onClick={() => setAlertType("success")}>
          Success
        </button>

        <button type='danger' onClick={() => setAlertType('error')}>Error</button>

        <button type='primary' onClick={() => setAlertType('warning')}>Warning</button>

        <Alert type={alertType} message={alertType === 'success' ? "Action Success" : alertType === 'warning' ? "Warning!" : alertType === 'error'? "Something went wrong!" : ""}>
        </Alert>
      </div>
    </>
  )
}

export default App
