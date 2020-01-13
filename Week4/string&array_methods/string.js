var name = "Hello"
//part1
console.log( name.toUpperCase() + name.toLowerCase() );


//part2
console.log(name.length / 2)
console.log(Math.floor(2.5))
//part3
 function word(str1) {
return str1.slice(0, str1.length / 2)
}
 var result = word("hello")
console.log(result)

//part4
function part4 (str1) {
    return str1.slice(0, str1.length / 2) + result.toUpperCase()
}
var result = part4("hello")
console.log(result);
