// manipule o json, adicionando o complemento apt 102 para a cliente "Emilee" (ela ainda não possui complemento) e veja se é possível simplificar o código
const clientes =  require("./clientes.json")

function  encontrarClientePorNome(lista, chave, valor){
    const encontrado = lista.find(cliente => cliente[chave].includes(valor))
    encontrado.endereco.complemento = "apt 102"
    console.log(encontrado)
}

encontrarClientePorNome(clientes, "nome", "Emilee")

