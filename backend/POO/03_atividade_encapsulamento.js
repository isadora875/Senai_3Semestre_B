class magico {
    #valorEnergia = 100;

    nome;
    nivelMagia;
    constructor(nome, nivelMagia, valorEnergia) {
        this.#valorEnergia = valorEnergia;
        this.nivelMagia = nivelMagia;
        this.nome = nome;

    }
    apresentar() {
        return `${this.nome}, ${this.nivelMagia}`
    }
    mostrarEnergia() {
        return this.#valorEnergia
    }
    lancarFeitico() {
        this.#valorEnergia -= 10;
    }
    recarregar() {
        this.#valorEnergia += 10;
    }
}

const magico1 = new magico('martinz', 'Nivel 1', 100);
console.log(magico1);
console.log(magico1.apresentar());
console.log(magico1.mostrarEnergia());
magico.lancarFeitico();
magico.recarregar();



