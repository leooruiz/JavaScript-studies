const pares = [2, 4, 6]
const impares = [1, 3, 5]
let numeros = [...pares, ...impares] // o ... é utilizado para retirar os argumentos do array, trazendo-os para o array externo
console.log(numeros)

const [num1, num2, ...outros] = [23, 56, 12, 13, 14] // neste caso o ... é utilizado para agrupar o resto dos termos em outra array, veja que podemos declarar diversos valores em uma linha somente
console.log(num1, num2, outros)

const [quarto, cozinha, banheiro] = [['grande', 1, 1], ['médio', 2, 2], ['pequeno', 3, 3]] // cada variável recebe uma array
console.log(banheiro)

const [nome1 = 'leo'] = [] // declarar uma variável que caso venha sem valor ou undefined ela receberá um valor padrão
