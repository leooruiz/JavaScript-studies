// função padrão - pode ser usada em qualquer momento do código e ser chamada antes mesmo de declarada
console.log(soma(3, 6)) // can use before initialize the function.
function soma(num1, num2){ 
    return num1+num2
}

// expressão de função
// conhecida como função anônima pelo fato de não ter um nome.
// console.log(soma1(2, 4)) // cannot use before initialize the function.
let soma1 = function(n1, n2){ // expressão de função, usada em escopo local e deve ser declarada antes de ser usada.
    return n1+n2
}
console.log(soma1(2,4))


//arrow function - jeito rápido e curto de escrever função, algumas vantagens com objetos
const apresentaArrow = idade => `Minha idade é ${idade}` //até 1 parametro não utiliza parêntesis, também não utiliza chaves, nem return, sempre acompanha const

const soma3 = (num1, num2) => num1+num2 //2 parâmetros utiliza-se parêntesis

const somaAte10 = (n1, n2) => { //caso a instrução tenha mais de uma linha deve-se utilizar chaves
    if ((n1+n2)<=10){
        return n1+n2 //quando trabalhamos com condicionais devemos usar return, já que possui 2 possibilidades
    } else
    return 'impossível somar'
}
console.log(somaAte10(4, 7))