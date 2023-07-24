const clientes = require('./clientes.json')// copiando o json e trazendo como objeto para js

function encontrar(lista, chave, valor){
    return lista.find(item => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, "nome", "Kirby")

const encontrado2 = encontrar(clientes, "telefone", '4733865848')
console.log(encontrado)
console.log(encontrado2)
