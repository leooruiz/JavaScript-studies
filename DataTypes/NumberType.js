function horasPorDiaJogando(horas, dias){
    let horaspordia = (horas/dias);
    return (`${Math.round(horaspordia)} horas por dia`) // AJUSTANDO VALOR FLOAT PARA DUAS CASAS DECIMAIS
}
let a = horasPorDiaJogando(234, 28) // CHAMADA DA FUNÇÃO
console.log (a)
console.log(typeof a) //retorna o .tofixed, Math.ceil, Math.floor e Math.round como STRING!

function QuantoLeoGanharaPorHora(salario, hora){
    let salariohora = salario/hora
    return salariohora
}
let horasMesTrabalho = 6*20 // HORAS QUE TRABALHO POR MÊS(PODERIA CRIAR FUNÇÃO)
let ValorEmReais = QuantoLeoGanharaPorHora(900, horasMesTrabalho).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); // FORMATANDO NÚMERO PARA VALOR MONETÁRIO
console.log(ValorEmReais)
console.log(typeof ValorEmReais) //O valor torna-se string ao aplicarmos ToLocaleString()