const cliente = {
    nome: "João",
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["111555666", "444999222"]
}

cliente.enderecos = [
    {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
},
]

const chavesDoObjeto = Object.keys(cliente) // object.keys retorna todas as chaves em forma de string, auxiliando na sua manipulação
console.log(chavesDoObjeto)

if (chavesDoObjeto.includes('enderecos')){
    console.log(`Usuário possui endereço cadastrado com sucesso, sua rua é ${cliente.enderecos[0].rua}, número ${cliente.enderecos[0].numero}`)
} else{
    console.error(`Usuário não possui endereço cadastrado`)
}