class grife1 {
    constructor(nome, idade, diretor){
        this.nome = nome;
        this.idade = idade;
        this.diretor = diretor;
       
    }
}

class versace extends grife1 {
    constructor(nome, idade, ondeNasceu) {
        super(nome, idade, ondeNasceu);
        this.ondeNasceu = ondeNasceu;
    }
}
 

class gucci extends grife1 {
    constructor(nome, idade, ondeNasceu) {
        super(nome, idade, ondeNasceu);
        this.ondeNasceu = ondeNasceu;
    }
}



const grife2= new grife1 ("prada", 113, "Miuccia Prada");
console.log(grife2);

const grife3 = new versace ("versace", 70, "Milão");
console.log(grife3);

const grife4 = new gucci ("gucci", 105, "Florença");
console.log(grife4);
