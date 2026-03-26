const pais = {
    "nome" : "Brasil",
    "capital" : "Brasília",
    "populacao" : 211000000,
    "idioma" : "português",
    "região" : {
        "sudeste": "São Paulo / Rio de Janeiro / Minas / ES",
        "sul": "PR RS SC",
        "norte": "AM AC RR RO PA AP TO"
    }
}

console.log(pais.idioma);
console.log(pais.região.sul);

//let nome = pais.nome;
//let capital = pais.capital;
//let populacao = pais.populacao;
//let idioma = pais.idioma;
let {nome, capital, populacao, idioma} = pais;
console.log(nome, capital, populacao, idioma);
