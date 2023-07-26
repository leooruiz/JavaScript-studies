//manipule o json, adicionando a todos os endereços o par chave valor "País: Brasil",
const clientes = require("./clientes.json")

function adicionandoNacionalidade(lista) {
    lista.map(cliente => { //percorre todos os elementos da lista
        switch (cliente.genero) { // caso a pessoa for mulher, será brasileira, caso for homem, será brasileiro
            case "feminino":
                cliente.Nacionalidade = "brasileira"
                break
            case "masculino":
                cliente.Nacionalidade = "brasileiro"
                break
        }
    })
    console.log(clientes)
}
adicionandoNacionalidade(clientes)