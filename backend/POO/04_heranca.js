class Pessoa {
    nome;
    constructor(nome){
        this.nome = nome
    }

    apresentar() {
        return `${this.nome}`;
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf
    }
}

class PessoaJuridica  extends Pessoa{
      cnpj;
      constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
      }
}
const Isadora = new PessoaFisica("Ana","123.456.789-00");
console.log(Isadora.apresentar());
console.log(Isadora.cpf);

const sesi = new PessoaJuridica("SESI - Andradina", "12.345.678/0001-90")
console.log(sesi.apresentar());


