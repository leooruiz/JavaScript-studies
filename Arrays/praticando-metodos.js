let carros = ['ford', 'FiaT', 'Mecredes', 'Jeep', 'cHevrolet', ' ', 'Nissan', 'banana']
// exercício: coloque todos os nomes de carros em maiúsculas, retire os elementos que não são carros e corrija os erros ortográficos dos carros presentes e colocando em ordem alfabética.
carros.pop() //removendo banana
carros.splice(5, 1) // primeiro número é o índice que desejo remover e o segundo é a quantidade que desejo remover
carros.splice(2, 1) // removendo 'Mecredes'
carros.push('Mercedes') // inserindo nome do carro corretamente no arrayA
carros.sort()
let carrosToUpper = carros.map((carro) => carro.toUpperCase()) // transformando os itens UpperCase e colocando em uma nova array  // organizando em ordem alfabética
console.log(carrosToUpper)


let valores = ['100', '200', '300', '400', '500', '600']
//exercicio: filtre apenas os valores abaixo de 450 e os retorne em outra array, além de mostrar os índices e valores retirados após a filtragem 
let numerosAtualizados = valores.filter(valor => valor<450)
let numerosRetirados = valores.filter(valor=> valor>450)
let indicesRetirados = valores.findIndex(valor => valor>450) //pesquisar como pegar mais de 1 indice de uma array, a partir de '500'
console.log(`Os valores abaixo de 450 são ${numerosAtualizados} e os valores que foram retirados da array foram ${numerosRetirados} de índices ${indicesRetirados} respectivamente`)