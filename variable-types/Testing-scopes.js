{
    function salariohora(salario, horas) {
        var salhora = 2
        var salporhora = salario / horas * salhora
        return salporhora
    }
    console.log(salhora) //  salhora não está definido, ou seja, tudo criado dentro de uma função permanece dentro desta função, incluindo o var que é de escopo global
    var salhora = 21
    let numero = 5
    const amigo = 'leo'
} {
    console.log(salhora) // salhora foi declarado no escopo anterior, e agora ainda pode ser usado, var então é de escopo global
    //console.log(numero) // numero não está definido, ou seja, let é de escopo local
    //console.log(amigo) // amigo não está definido, ou seja, const é de escopo local também

}
//Exemplo com let
let nome = 'Lucas'

if (true) {
    let nome = 'Amanda'
    console.log(nome) // 'Amanda'
}
console.log(nome) // 'Lucas'  


//Exemplo com var
var nome2 = 'Lucas'

if (true) {
    var nome2 = 'Amanda' //quando se utiliza var dentro de condicionais ou loops, seu comportamento é estranho, pois modifica a variável fora do bloco
    console.log(nome2) // 'Amanda'
}
console.log(nome2) // 'Amanda' 

numero1 = 1
numero2 = 2
const soma = numero1 + numero2
console.log(soma)
numero1 = 2
console.log(soma) // valor da const 'soma' não é alterado devido as propriedades da variável const

