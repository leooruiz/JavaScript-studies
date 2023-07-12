const nomes = ['Evaldo', 'Mari', 'Camis']
// nomes.forEach(function (nome) { //função anônima utilizada no callback
//     console.log(nome)
// })


// nomes.forEach((nome) => { // Arrow function utilizada no callback
//     console.log(nome)
// })


//Criando função callback de forma externa
function imprimeNome(nome){
    console.log(nome)
}
nomes.forEach(imprimeNome) // deve ser sem parêntesis, pois senão é como se quisessemos o retorno da função, porém não estamos retornando nada na função imprimeNome

// o padrão adotado em funções callbacks é o de arrow functions
const lista = [1, 2, 3, 4, 5];
let soma = 0;
lista.forEach(numero => soma += numero); //toda função declarada em apenas uma linha
console.log(soma) //15

// forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

// for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

// for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).