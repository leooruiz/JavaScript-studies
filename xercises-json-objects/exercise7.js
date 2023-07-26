//manipule o json, removendo o telefone residencial de todos os clientes, transformando a chave telefone em uma variável simples, desfazendo o array.

const clientes = require("./clientes.json")

function removeTelefoneResidencial(lista) {
    for (let i in lista) {
        for (let j in lista[i].telefone) {
            if (lista[i].telefone[j].length === 10) { // caso o número for igual a 10 dígitos iremos removê-lo
                delete lista[i].telefone[j] // 
                 // tentar retirar espaços vazios da array!!
            }

        }
        // let filterList filter not undefined list
        let remainingNumbers = lista[i].telefone.filter(value=> value != undefined)
        if (remainingNumbers.length==1){
            lista[i].telefone = remainingNumbers[0]
        
        } else {
            lista[i].telefone=remainingNumbers
        }

    }
    console.log(lista)
}
removeTelefoneResidencial(clientes)

let testeArray = [0, , 20]
console.log(...testeArray)