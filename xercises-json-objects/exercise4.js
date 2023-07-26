// manipule o json, filtrando todos aqueles que os números de telefone contém  9 // desafio: procure por aqueles que começam com 9 
const clientes = require("./clientes.json")

function filtrarClientesPorTelefone(lista) {
    const filtrados = lista.filter(cliente => {
    return cliente.telefone[0][0] === '9' && cliente.telefone[1][0] === '9' // caso o primeiro numero dos dois telefones seja 9 ele irá retornar os dafos do cliente
})
console.log(filtrados) // mostrará os dados retornados do cliente
}

filtrarClientesPorTelefone(clientes)