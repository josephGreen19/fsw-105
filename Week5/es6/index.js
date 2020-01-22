//1
let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for ( let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log( "man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])
//2
const carrots = [ "bright orange", "ripe", "rotten"]

const  mapVegetablesES6 = () => {
    return arr.map(function(carrot){
        return { type: "carrot", name: carrot}
    })
}
console.log(carrots)
//3
const people = [
    { name: "Princess Peach",
      friendly: false
    },
    { name: "Luigi",
      friendly: true
    },
    { name: "Mario",
      friendly: true
    },
    { name: "Bowser",
      friendly: false
    }
]

const filterForFriendly = () => {
    return arr.filter(function(person){
        return person.friendly
    })
}
console.log(people)
//4
 const doMathSum = (a, b) => { return a + b }

 const produceProduct = (a , b) => { return a * b}
//5

const person = {
    fName: "Jane",
    lName: "Doe",
    ages: 100
}
const { fName, ages, lName} = person
console.log("Hi " + fName +   lName + " how does it feel to be " + ages + '?')
//6


//7
const animals = [
    {
        type: "dog",
        name: "theodore",
    },
    {
        type: "cat",
        name: "whiskers",
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(animal) {
    return arr.filter(animal => {
        if (animal.type ==="dog") {
            return true
        } else{
            return false
        }    
    })
}
