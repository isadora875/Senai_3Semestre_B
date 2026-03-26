import Jogador from '../models/Jogador.js';

let listaJogadores = [
    new Jogador (1, "Douglas", 95),
    new Jogador (2, "Ricardo", 88),
    new Jogador (3, "Marco Antonio", 300)
]

const jogadorController = {
     listar: (req,res) => {
        res.render('jogadores.ejs', {jogadores: listaJogadores})
    },
    adicionar: (req,res) => {
        const {nome, pontuacao} = req.body;

        try{
            //Construindo um novo objeto através da classe livro
            const novoJogador = new Jogador(
                listaJogadores.length + 1, 
                nome, 
                Number(pontuacao)
            );
            listaJogadores.push(novoJogador);
            res.redirect('/jogadores')

        }catch(e)
        {
            res.status(400).render('jogadores.ejs', {lista: listaJogadores, erro:e.message})
        }
    },

    adicionarPontos: (req,res) => {
        const {id} = req.body;
        const jogador = listaJogadores.find(j => j.id == Number(id))
        jogador.adicionarPontos();
        res.redirect('/jogadores');
    }
}

export default jogadorController;