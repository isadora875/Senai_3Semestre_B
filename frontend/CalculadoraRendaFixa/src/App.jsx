import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Calculadora from './pages/Calculadora'
import Sobre from './pages/Sobre'

function App() {
  return (
    //BrowserRouter habilita o sistema de navegação por rotas
    <BrowserRouter>
    {/*Barra de navegação aparece em todas as páginas*/}
    <NavBar />

    {/*Área de conteudo principal*/}
    <main className='conteudo-principal'>
      <Routes>
        <Route path='/' element={<Calculadora/>} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </main>
    </BrowserRouter>
   
  )
}

export default App

