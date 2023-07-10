function reverseNumber(num){ // exercise 1: reverse numbers (without using reverse())
    let array = num.toString()
    array = array.split('')
    let finalNumber = ''
    for (let i = array.length-1; i >= 0; i--){
        finalNumber += array[i].toString()
        finalNumber = Number(finalNumber)
        }
    return finalNumber
}
console.log(reverseNumber(389021))
console.log()