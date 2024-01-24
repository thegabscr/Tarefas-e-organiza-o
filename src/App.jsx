import { useState } from 'react'
import './App.css'
import EditarStatus from './components/EditarStatus'
import EditarTarefa from './components/EditarTarefa'
import Criar from './components/Criar'
import Deletar from './components/Deletar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EditarStatus />
      <EditarTarefa />
      <Criar />
      <Deletar />
    </div>

  )
}

export default App


