const readline = require("readline-sync");



let firstNum = Number(readline.question("Please enter your first number "));
let secondNum = Number(readline.question("Please enter your second number "));
let operation = readline.question("Please enter the operation to perform: add, sub, mul, div ");


if (operation==="+"){
  console.log (firstNum + secondNum)
}else if (operation==="-"){
  console.log (firstNum - secondNum)
}else if (operation==="*"){
  console.log (firstNum * secondNum)
}else if (operation==="/"){
  console.log (firstNum / secondNum)
}
