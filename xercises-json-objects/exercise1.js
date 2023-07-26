// manipule o json, alterando o nome "Carolina" para "Caroline", altere seu endereco para numero 10 e exiba seus dados
const clientes = require("./clientes.json")

function encontrarPorNome(lista, chave, valor){
const encontrarCliente = lista.find(cliente => cliente[chave].includes(valor))// procurando "Carolina" na lista de "clientes"
encontrarCliente.nome = "Caroline" // mudando nome de Carolina para Caroline
encontrarCliente.endereco.numero = 10 //alterando o numero de caroline
console.log(encontrarCliente) // printando o cliente com as alterações feitas
}
encontrarPorNome(clientes, "nome", "Carolina") // perceba que alterando aqui, se altera diretamente os dados de "Caroline" na lista clientes
// console.log(clientes)