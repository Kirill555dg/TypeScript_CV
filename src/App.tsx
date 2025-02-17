import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width: '595px', height: '842px', display: 'flex', flexDirection: 'row'}}>
        <Sidebar>

        </Sidebar>
        <Main>
          
        </Main>
      </div>
    </>
  )
}

export default App
