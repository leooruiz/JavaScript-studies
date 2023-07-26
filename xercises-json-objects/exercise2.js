// manipule o json, alterando o numero do endereço de Dorothea para 2 (era 1)
const clientes = require("./clientes.json")

function encontrarClientePorNome(lista, chave, valor){
    const encontrado = lista.find(cliente => cliente[chave] === valor)
    encontrado.endereco.numero = "2"
    console.log(encontrado)
}

encontrarClientePorNome(clientes, "nome", "Dorothea")