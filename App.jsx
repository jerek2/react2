import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [liczba, setliczba] = useState(1)

  return (  
    <>
    <div>
      <p>Licznik: {liczba}</p>
    <button onClick={() => setliczba(liczba + 1)}>Zwiększa</button>
    <button onClick={() => setliczba(liczba - 1)}>Zmniejsza</button>
    </div>
    </>
  )
}

export default App
