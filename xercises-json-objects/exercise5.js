//manipule o json, retornando todos os clientes que tem email com final '.org' e ".gov"
const clientes = require('./clientes.json')

function filtrandoClientes(lista){
    const filtrados = lista.filter(cliente => {
        const lastIndex = cliente.email.length-1
        const finalWord = cliente.email.slice(lastIndex-3, lastIndex+1)
        return finalWord == ".org"
    }) // filtrando emails com .gov e .org
    
    console.log(filtrados)
}

filtrandoClientes(clientes)