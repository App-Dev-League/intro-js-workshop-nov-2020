let adj = prompt("Enter an adjective: ")
let noun = prompt("Enter a noun: ")
let verb = prompt("Enter a verb: ")
let obj = prompt("Enter an object: ")

//Option 1 (string concatenation)
console.log("The " + adj + " "+ noun + " " + verb + " " + obj + "!")

//Option 2 (formatted strings / template literals)
console.log(`The ${adj} ${noun} ${verb} ${obj}!`)
