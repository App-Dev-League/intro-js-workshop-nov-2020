let adj = prompt("Enter an Adjective: ")
let noun = prompt("Enter a Noun: ")
let verb = prompt("Enter a Verb: ")
let article2 = prompt("Enter an Article: ")
let adj2 = prompt("Enter another Adjective: ")
let noun2 = prompt("Enter another Noun: ")

//Option 1 (string concat)
console.log("The" + " " + adj + " " + noun + " " + verb + " " + article2 + " " + adj2 + " " + noun2)

//Option 2 (template literals)
console.log(`The ${adj} ${noun} ${verb} ${article2} ${adj2} ${noun2}.`)
