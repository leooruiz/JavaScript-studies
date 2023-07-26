let frutas = ['banana', 'maçã', 'pera2', 'manga2', 'melancia4', 'melão']
let numeros = [1, 20, 3, 5, 40]

console.log(typeof frutas) //object

let result = frutas.pop() // retira último índice do array, altera o array original removendo o elemento.
console.log(result) //retirou melão do array


numeros.shift()// Retira o primeiro elemento do array. Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
console.log(numeros)// retirou o número 1 do array


numeros.push(1)// Adiciona o elemento passado como parâmetro do array, porém na última posição. Altera o array original com o novo valor.
console.log(numeros)// adicionou o número 1 como último índice.


numeros.unshift(60)// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos. Altera o array original com o novo valor.
console.log(numeros)


let somaArrays = frutas.concat(numeros) //concatena arrays (deve ser salvo o resultado em outra variável, pois não altera os arrays originais)
console.log(somaArrays)


const filteredArray = frutas.filter((fruta, i, array) => fruta.includes(i)); //filtra os elementos que passam no teste da função.
console.log(filteredArray); // output: manga2 e melancia4 pois ambas as frutas possuem os números de seus índices em seus nomes


const findTest = frutas.find(fruta => fruta.length > 4) //Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
console.log(findTest)


let indexFinder = frutas.findIndex(fruta => fruta.length < 4) //Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
console.log(indexFinder)


frutas.reverse() // Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
console.log(frutas)


let frutasSlice = frutas.slice(2, 4) // Copia uma parte do array para outro array.
console.log(frutasSlice) // mostrou o índice 2 e 3, pois é até o índice 4, ou seja, não inclui o 4.


numeros.sort()// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
console.log(numeros)


numeros.splice(1, 3)//Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
console.log(numeros)


let somaconcatenada = 0;
frutas.forEach(element => {
    somaconcatenada += element
});
console.log(somaconcatenada)
//Executa uma função em cada elemento do array de forma individual. Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.


// reduce()
//Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final (o 'acc'), reduzindo o array para um único valor. 
function divideNumerosArray(numeros) {
    const divideNumeros = numeros.reduce((acc, numeros) => acc/= numeros, 1) // fará a instrução 1/5/60 = 0.0033
    console.log(divideNumeros)
}
console.log(numeros)
divideNumerosArray(numeros)
function divideDeTrasPraFrente(){ // frutas.reduceRight()//Funciona igual o reduce() porém começa do final do array e segue até o início.
    const divididos = numeros.reduceRight((acc, num) => acc/=num) //fará a instrução do final pro começo, 60/5/1 = 12
    console.log(divididos)
}
console.log(numeros)

divideDeTrasPraFrente(numeros)