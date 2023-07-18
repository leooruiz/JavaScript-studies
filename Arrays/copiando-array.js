const notasOriginais = [7, 7, 8, 9];
const novasNotas = notasOriginais;
novasNotas.push(10)
notasOriginais.push(11)

//peculiaridade do javascript você alterar uma array, altera também sua cópia e vice versa
console.log(notasOriginais) // 10 também foi adicionado a notasOriginais
console.log(novasNotas) // 11 também foi adicionado ao novasNotas

//para resolver esse problema basta utilizar o operador de espalhamento (spread operator)
const numeros = [1, 2 , 3, 4]
const numerosNovos = [...numeros, 5] //utilizando a reticências não se conectam os arrays, ou seja, pode-se alterar qualquer um dos dois de forma independente
numerosNovos.push(6) //push em numerosNovos não altera numeros

console.log(numeros)
console.log(numerosNovos)

