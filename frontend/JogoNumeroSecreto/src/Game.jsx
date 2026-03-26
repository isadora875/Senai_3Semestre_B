import { estilos } from "./GameEstilos"


const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero)
    const [chute, setChute] = useState(0)
    const [mensagem, setMensagem] = useState('Adivinhe um número entre 1 e 100')
    const [tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1
    }
    function botaoChutar(){
        if ( numeroSecreto == chute){
            setMensagem(`✅Acertou! Você descobriu em ${tentativas} tentativas!`)
            setJogoFinalizado(true)
        } else if (numeroSecreto < chute) {
            setMensagem(`Você chutou ${chute}. O n° secreto é menor!`)
            setChute(' ')
            setTentativas(tentativas + 1)
        } else {
            setMensagem(`Você chutou ${chute}. O n° secreto é maior!`)
            setChute(' ')
            setTentativas(tentativas + 1)
        }
        }

        function botaoNovoJogo (){
            setChute('')
            setJogoFinalizado(false)
            setTentativas(1)
            setMensagem('Escolha um número entre 1 e 100')
            setNumeroSecreto(sortearNumero)
        }

    return (
       <section style={estilos.container}>
          <div style={estilos.conteudo}>
          <div style={estilos.informacoes}>
              <div style={estilos.texto}>
                   <h1 style={estilos.h1}>Jogo Numero Secreto</h1>
                   <p style={estilos.mensagem}>{mensagem}</p>
              </div>
              <input onChange={(event) => setChute(event.target.value) } value={chute} 
              type="number" style={estilos.chute} />
              <div style={estilos.botoes}>
                   <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                   <button style={estilos.botao} onClick={botaoNovoJogo}>Novo Jogo</button>
              </div>
          </div>
          <img src="./img/ia.png" style={estilos.imagem} alt="" />
          </div>

       </section>
    )
}
export default Game