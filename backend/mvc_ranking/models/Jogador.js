class Jogador {
    constructor(id, nome, pontuacao, nivel) {
        if (!pontuacao || !nome) {
            throw new Error('nome ou pontuação são obrigatórios')
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao);
        this.nivel = nivel;
    }
    descricao() {
        return `${this.nome} - ${this.pontuacao}`
    }


    verificarNivel() {
        if (this.pontuacao <= 100) return 'Iniciante';
        if (this.pontuacao <= 300) return 'Intermadiário';
        return 'Avançado';
    }
}
export default Jogador