const amigos = ['Eduardo', 'Matheus', 'Arthur', 'Felipe', 'Mario']
let filteredArray = amigos.filter(amigo => amigo.includes('a')) //filter filtra os elementos que retornarem true na função, não altera o array original
console.log(filteredArray)

let mapArray = amigos.map(amigo => amigo += ' é amigo do leo'); //map aplica função em todos os elementos do array, retornando um valor, não altera o array original
console.log(mapArray);

amigos.forEach(amigo => { //forEach aplica uma função em cada elemento do array, aplica-se diretamente no array e não retorna valor
    if (amigo.length == amigos.length){
        console.log(`${amigo} possui nome de 5 letras`)
    } else{
        console.log(`${amigo} não possui nome de 5 letras`)
    }
});
console.log(amigos)