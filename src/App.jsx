
import './App.css'
import './components/Context/PortContext'
import PortContextProvider from './components/Context/PortContext'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'

// import '../src/index.css'
import Header from './components/Header'

function App() {

  return (
    <>
    <PortContextProvider>
    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<SobreMi/>} />
    <Route path='/Sobremi' element={<SobreMi/>}/>
    <Route path='/Proyectos' element={<Proyectos/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
    <Contacto/>
    </BrowserRouter>
    </PortContextProvider>
    </>
  )
}

export default App
