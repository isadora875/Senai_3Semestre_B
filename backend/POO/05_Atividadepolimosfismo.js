class bruxo {
    nome;
    constructor(nome){
        this.nome = nome
    }

    apresentar() {
        return `${this.nome}`;
    }
}

class BruxoSonserino extends bruxo{
    constructor(nome, nivelmagia){
        super(nome, nivelmagia);
        this.nivelmagia = nivelmagia
    }
    apresentar(){
        return `Ola ${this.nome}, seu nivel magia: ${this.nivelmagia}`;
    }
}

class BruxoGrifinoria  extends bruxo{
      lancarfeitico;
      constructor(nome, lancarfeitico){
        super(nome, lancarfeitico);
        this.lancarfeitico = lancarfeitico
      }
      apresentar(){
        return `Ola ${this.nome}, seu feitico é ${this.lancarfeitico}`;
    }
}
const bruxo1 = new BruxoSonserino("draco","médio");
console.log(bruxo1.apresentar());


const bruxo2 = new BruxoGrifinoria("harry", "vento")
console.log(bruxo2.apresentar());



