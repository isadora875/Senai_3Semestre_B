import { Link, useNavigate } from 'react-router-dom'

function Detalhes(){
    const navigate= useNavigate();
  
    return(
    <div>
        <h1>Mais informações</h1>
        <button onClick={() => navigate('/contato')}>Sobre</button>
      
    </div>
  )
}

export default Detalhes