
//Write a JavaScript program that takes a string variable and reverses it using a for loop. For example, if the input string is "hello", the output should be "olleh".

let string = `discord`
let reversed = ""

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
}

console.log(reversed)


//Write a JavaScript program that calculates the power of a number without using the built-in Math.pow method or the ** operator. The program should take two variables, base and exponent, and calculate the power using a for loop.

let base = 3
let exponent = 4
let x = 1

for (let i = 0; i < exponent; ++i) { 
    x = base * x
}
  
console.log(x)