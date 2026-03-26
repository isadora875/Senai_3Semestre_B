class pessoa {
    //atributo privado
    #documento;

    //atributo publico
    nome;
    idade;

    constructor(nome, idade, documento){
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento; //privado
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
}

const pessoa1 = new pessoa('Livia', 17, '25756527618')
console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());

