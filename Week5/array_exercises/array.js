//filter()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = arr.filter(function(num){
    if(num >= 5){
        return true
    }
})
console.log(result)

const part2 = arr.filter(function(num){
    if(num % 2 === 0) {
        return true
    }
})
console.log(part2)

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

const part3 = words.filter(function(word){
    if( word.length <= 5){
        return true

    }
})
console.log(part3)

const club = [
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member:true},
    {name: "Kayne West", member:false},
    {name: "Bob Ziroll", member:true}
]
const part4 = club.filter(function(people){
    if( people.member === false){
        return true
    }
})
console.log(part4)

const oldEnough = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Airoll", age: 100}
]
const part5 = oldEnough.filter(function(name){
    if(name.age >= 18){
        return true
    }
})
console.log(part5)

// Map()
const doubleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const part6 = doubleNumbers.map(function(number){
    return number * 2
})
console.log(part6)

const part7 = doubleNumbers.map(String)
    console.log(part7)

const capitalNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var part8 = capitalNames.map(function(fName) { 
    return fName.toUpperCase(); });
console.log(part8)

const part9 = oldEnough.map(function(namesOnly){
    return namesOnly.name
})
console.log(part9)

const part10 = oldEnough.map(function(allowedOrNot){
    if(allowedOrNot.age >=18){
        return allowedOrNot.name +(" can go watch The Matrix ")
    }else{
        return allowedOrNot.name +(" is not allowed to watch The Matrix ")
    }
})
console.log(part10)

const part11 = oldEnough.map(function(tags){
    return "<h1>" +tags.name+ "</h1>" + "<h2>" + tags.age + "</h2>" 
})
console.log(part11)

//Reduce

const total = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const part12 = total.reduce(function(final, num1){
    final += num1
    return final   
})
console.log(part12)

const totalVotes = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted:false},
    {name: "Joey", age:41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
]

const part13 = totalVotes.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)
console.log(part13)

const wishlist = [
    { title: "Tesla Model S", price: 90000},
    { title: " 4 carat diamond ring", price: 45000},
    { title: "Fancy hacky Sack", price: 5},
    { title: "Gold fidgit spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000}
]

const part14 = wishlist.reduce(function(final, cost){
    final += cost.price
    return final
}, 0 )
console.log(part14)

const flatten = [
    [ "1", "2", "3"],
    [ true],
    [ 4, 5, 6]
]

const part15 = flatten.reduce(function(final, oneArray){
    return final.concat(oneArray)
})
console.log(part15)

// Sort

const leastToGreatest = [ 1, 3, 5, 2, 90, 20]

leastToGreatest.sort(function( a, b ){
    return a - b
})
console.log(leastToGreatest)

leastToGreatest.sort(function( a, b ){
    return b - a
})
console.log(leastToGreatest)

words.sort(function( big , small ){
    return big.length - small.length
})
console.log(words)

var sortedArray = words.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });
console.log(sortedArray);

const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100},
    { name: "Misunderstood Observer", age: 2},
    { name: "Unlucky Swami", age: 77}
]

byAge.sort(function(a, b) {
       return a.age - b.age
    }
);
console.log(byAge)
