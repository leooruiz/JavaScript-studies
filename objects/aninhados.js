const cliente = {
    nome: "João",
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["111555666", "444999222"],
    
}

cliente.endereco = {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
}
console.log(cliente.endereco.complemento)