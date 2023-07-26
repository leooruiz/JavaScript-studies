// altere todos os nomes de clientes para maiúsculas
const clientes = require("./clientes.json")

function clientesParaMaiusculas(lista){
    lista.map(cliente => cliente.nome = cliente.nome.toUpperCase())
    console.log(lista)
}
clientesParaMaiusculas(clientes)
