// função padrão
console.log(soma(3, 6)) // can use before initialize the function.
function soma(num1, num2){ 
    return num1+num2
}


// conhecida como função anônima pelo fato de não ter um nome.
console.log(soma1(2, 4)) // cannot use before initialize the function.
let soma1 = function(n1, n2){ // expressão de função, usada em escopo local e deve ser declarada antes de ser usada.
    return n1+n2
}
console.log(soma1(2,4))


//arrow function