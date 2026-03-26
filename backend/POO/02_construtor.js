//criando nossa primeira classe
class Pessoa{
    //criando o metodo construtor
    construtor(nome, idade){
        //atributros
        this.nome  = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Leticia", 17);
console.log(Pessoa1);
const pessoa2 = new Pessoa("Gabi", 17);

class bruxo{
    construtor(nome, idade, feitiço, casa, nivelMagia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
    
    }
}

const harry = new bruxo("Harry", 17, "Expelliarmus", "Grifinoria", 1);
console.log(harry)
