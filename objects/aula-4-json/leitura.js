const dados = require("./cliente.json") // require é a forma que se usa para ler arquivos JSON
console.log(dados)
console.log(typeof dados)// output: object

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString)// output: string
console.log(clienteEmString.toUpperCase(), clienteEmString.length)// ao transformar em string é possível utilizar os métodos e funções de string

const ObjetoCliente = JSON.parse(clienteEmString) // transforma em JSON a string
console.log(ObjetoCliente)// output: objeto completo