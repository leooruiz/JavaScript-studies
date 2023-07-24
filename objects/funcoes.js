const cliente = {
    nome: "João",
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["111555666", "444999222"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){ //this refere-se ao próprio objeto, ao invés de ter que digitar sempre o nome, pode-se utilizar o this nesses casos
            console.log("Pessoa não possui saldo suficiente")
        } else{
            this.saldo-=valor
            console.log(`Compra realizada!, saldo atual é ${this.saldo}R$`)
        }
    }
};
cliente.efetuaPagamento(100)


