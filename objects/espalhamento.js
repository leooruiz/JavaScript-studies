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


function ligaParaClientye(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaClientye(cliente.telefone[0], cliente.telefone[1])
console.log()
ligaParaClientye(...cliente.telefone) //espalhou-se o array utilizando o spread operator, sendo uma forma mais fácil do que a utilizada anteriormente

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0] // spread operator auxilia a pegar vários valores que estavam em uma array/objeto
}
console.log(encomenda)


const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
// Para juntar os objetos em uma só variável, utilizamos o spread operator antes de escrever o argumento
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)



//caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave
const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiros = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const ranger = {
    nome: "Legolas",
    classe: "ranger"
}
const personagens = { ...mago, ...guerreiros, ...ranger } 
console.log(personagens)// retorna apenas 2 valores, pois esses sobrescreveram os antigos devido ao mesmo nome de propriedade