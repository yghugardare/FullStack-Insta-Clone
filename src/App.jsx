import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>

      </Routes>
    </div>
  )
}

export default App
