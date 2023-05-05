
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectesRoutes from './pages/ProtectesRoutes'
import PokeInfo from './pages/PokeInfo'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectesRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:name' element={<PokeInfo/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
