const cliente = {} //declarar antes de utilizar para poder separar informações pessoais e endereco, pois não é possível declarar com propriedade no JavaScript
cliente.informacoesPessoais = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(11)55555550", "(22)41144440"],
    CPF: '73890531980',
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};
const telefoneSP = cliente.informacoesPessoais.telefone.filter(telefone => telefone.includes('(11)')) // uma função que pega somente os telefones com DDD de São Paulo
console.log(cliente);
console.log(cliente.informacoesPessoais.telefone[1])
console.log(telefoneSP)
