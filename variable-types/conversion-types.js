// Conversão implícita
let num = 200
let numString = "200"
console.log(num + numString) //output: 200200; concatena, pois converte num em string implicitamente

// Conversão explícita => BOA PRÁTICA EM JAVASCRIPT!

//Para isso convertemos utiliza-se Number() ou String() neste caso
console.log(num + Number(numString)) // output: 400; pois converte em number o 'numString' antes de somá-lo

// Porém se somar o numString com valor de número se caracteres dentro de seu valor o resultado esperado é NaN
numString = '200a'

console.log(num + Number(numString)) // output: Nan; pois o 'numString' tem valor '200a', na qual 'a' não é transformável em número, ou seja, não pode ser somado a outro número

// É possível também converter strings em numbers através do operador "+"
numString = '200'
console.log(num + (+numString))// output: 400; 
 
// Em conversão de booleano, podemos utilizar o Number() para retornar 0 ou 1
let verdadeiro = true
let falso = false
console.log(Number(verdadeiro))// output: 1
console.log(Number(falso))// output: 0

//utilizando o operador '+'
console.log(+verdadeiro)// outpu: 1
console.log(+falso)// output: 0