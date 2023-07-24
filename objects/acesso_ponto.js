const cliente = {
    nome: 'André',
    idade: 32,
    cpf: '11122222333',
    email: "andre@dominio.com",
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`)

console.log(`Os 3 primeiros digitos do cpf de ${cliente.nome} são ${cliente.cpf.substring(0, 3)}`)