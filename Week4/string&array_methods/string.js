var name = "Hello"

console.log( name.toUpperCase() + name.toLowerCase() );



console.log(name.length / 2)
console.log(Math.floor(2.5))

 function word(str1) {
return str1.slice(0, str1.length / 2)
}
 var result = word("hello")
console.log(result)


function part4 (str1) {
    return str1.slice(0, str1.length / 2) + result.toUpperCase()
}
var result = part4("hello")
console.log(result);
