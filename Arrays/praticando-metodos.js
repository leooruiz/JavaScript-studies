let carros = ['ford', 'FiaT', 'Mercedes', 'Jeep', 'cHevrolet', ' ', 'Nissan', 'banana']
// exercício: coloque todos os nomes de carros em maiúsculas, retire os elementos que não são carros e corrija os erros ortográficos dos carros presentes e colocando em ordem alfabética.
carros.pop() //removendo banana
carros.splice(5, 1) // primeiro número é o índice que desejo remover e o segundo é a quantidade que desejo remover
carros.sort() // organizando em ordem alfabética
let carrosToUpper = carros.map((carro) => carro.toUpperCase()) // transformando os itens UpperCase e colocando em uma nova array 
console.log(carrosToUpper)

