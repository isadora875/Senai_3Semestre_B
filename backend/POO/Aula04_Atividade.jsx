class bruxo {
    nome;
    idade;
    feitico;
    nivelmagia;


    constructor(nome, idade, feitico, nivelmagia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.nivelmagia = nivelmagia;
    }
    apresentar() {
        return `${this.nome}, ${this.idade}, ${this.feitico}, ${this.nivelmagia}`
    }
}

class grifinoria extends bruxo {
    casa;
    constructor(nome, idade, feitico, nivelmagia, casa) {
        super(nome,idade,feitico,nivelmagia)
        this.casa = casa
    }
}
class sonserina extends bruxo {
    casa;
    constructor(nome, idade, feitico, nivelmagia, casa) {
        super(nome,idade,feitico,nivelmagia)
        this.casa = casa
    }
}

const hermione = new grifinoria("hermione", 17, "abacadraba", "alto", " da grifinoria")
console.log(hermione.apresentar());
console.log(hermione.casa);
const roni = new sonserina("roni", 17, "abacadraba", "alto", " da sonserina")
console.log(roni.apresentar());
console.log(roni.casa);
