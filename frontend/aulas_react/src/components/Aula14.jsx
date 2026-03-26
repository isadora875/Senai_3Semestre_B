import { estilos } from "../style/Estilos"
import {Link, useNavigate} from 'react-router-dom'

const Aula14 = () => {
   const navigate = useNavigate();
   
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
           <hr />
           <h3>Navegação com links do React Router</h3>
           <Link to='/'>Página Principal</Link>
           <br />
           <Link to='/sobre'>Página Sobre</Link>
           <br />
           <Link to='/sesisenai'>Página Inexistente</Link>
           <br />
           <h3>Navegação com programação utilizando o useNavigate</h3>
           <button onClick={() => navigate('/sobre')}>Sobre</button>

           <hr />
           <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate('/perfil/let')}>Perfil da Let</button>
            <button onClick={() => navigate('/perfil/Isa')}>Perfil da Isa</button>


        </div>
    )
}

export default Aula14

