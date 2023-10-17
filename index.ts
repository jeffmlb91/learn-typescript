{/**
//regular function
const add = (a, b) => {
   return a + b
}
console.log(add(2, 3))

// Second fubnctiion with error
//User intry adds string instead of numbers
const addTwo = (a, b) => {
    return a + b;
}
console.log(addTwo('3', '5'))

*/}


const add = (a: number, b: number):number => {
    return a + b;
}
console.log( add(2, 3))