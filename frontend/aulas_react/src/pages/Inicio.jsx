import { Link } from 'react-router-dom'

function Inicio(){
  return(
    <div>
        <h1>Bem vindo</h1>
        
        <Link to='/'>Voltar para Detalhes</Link>
    </div>
  )
}

export default Inicio