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
for(let chave in cliente){ // for in manipula as propriedades do objeto, percorrendo-o trazendo o valor chave, porém, não retorna corretamente valores de objetos, arrays e funções de maneira simples
    let tipo = typeof cliente[chave]
    if (tipo != 'object' && tipo != 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}