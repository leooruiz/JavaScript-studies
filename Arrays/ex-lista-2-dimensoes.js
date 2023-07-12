//const alunos = ["João", "Juliana", "Ana", "Caio"];
//const medias = [10, 8, 7.5, 9];
const [alunos, medias] = [["João", "Juliana", "Ana", "Caio"], [10, 8, 7.5, 9]] // declarando duas arrays na mesma linha
const listaDeAlunosEMedias = [alunos, medias]
console.log(`a aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]} e sua nota é ${listaDeAlunosEMedias[1][0]}`) // para acessar os valores em listaDeAlunosEMedias precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de listaDeAlunosEMedias será acessado. 
// O segundo colchete será usado para acessar a informação dentro do array escolhido.


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal) //Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.


const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal.concat([80, [90, 100]]) //este método não extrai os elementos de arrays que estejam “aninhados”, Desta forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

console.log(arrayConcat2) //[ 50, 60, 70, 80, [ 90, 100 ] ]
console.log(arrayOriginal2) 



//concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.