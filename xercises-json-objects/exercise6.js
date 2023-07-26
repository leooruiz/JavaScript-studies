//manipule o json, adicionando a todos os endereços o par chave valor "País: Brasil",
const clientes = require("./clientes.json")

function adicionandoNacionalidade(lista) {
    for (let i in lista) { // percorrerá toda a lista 
        switch (lista[i].genero) { // caso a pessoa for mulher, será brasileira, caso for homem, será brasileiro
            case "feminino":
                lista[i].Nacionalidade = "brasileira"
                break
            case "masculino":
                lista[i].Nacionalidade = "brasileiro"
                break
        }
    }
    console.log(lista)
}
adicionandoNacionalidade(clientes)