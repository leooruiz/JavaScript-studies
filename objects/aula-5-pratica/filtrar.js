const clientes = require("./clientes.json")

// function filtraApartamentosSemComplemento(clientes) {
//     return clientes.filter(cliente => {
//         return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")) // filtra cliente por cliente, salvando aqueles que moram em apt e que não possuem complemento
//     })
// }
// const filtrados = filtraApartamentosSemComplemento(clientes)
// console.log(filtrados)

function ApartamentosSemComplemento(clientes){
    return clientes.filter(cliente => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")) //hasOwnProperty serve para verificar se há a propriedade no objeto em questão, retornando um booleano
    })
}
console.log(ApartamentosSemComplemento(clientes))



