const idade = 16;
if (idade >= 18){
  console.log("Você é adulto");
  
} else if (idade >= 12 && idade < 18) {
  console.log('Você é um adolescente')
} else {
    console.log('Você é uma criança')
}

 //Operador ternário
 let tema = 'dark';
 let corFundo;
 if (tema == 'dark') {
     corFundo = 'preto';

} else {
    corFundo = 'branco';
 }

 //condição       se Verdadeira     senão
 tema == 'dark' ? corFundo = 'preto' : corFundo = 'branco';

