//função nomeada
 function saudacao(nome) {
 console.log(`Tenha um bom dia ${nome}`);
}
saudacao('Douglas');

//Função anônima
const saudacao2 = function (nome) {
 console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Douglas');

//Função nomeada Soma
function soma(n1, n2) {
    console.log(`O resultado é ${n1, n2}`);
}
soma(6,4);

//Função anônima Soma2
const soma2 = function (n1, n2) {
    let resultado = n1 + n2;
    console.log(` ${resultado}`);
    
}
soma(4,5);