//arrays
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//remove last Vegetable
vegetables.pop();
console.log("vegetables: ", vegetables);
//remove first fruit
fruit.shift();
console.log("fruit: ", fruit);
// index of orange
 console.log(fruit.indexOf( 'orange'));
// adds 1
 fruit.push(1);
 console.log("fruit: ", fruit);
// length of vegetables
 console.log(vegetables.length);
// add 3
 vegetables.push(3);
 console.log("vegetables: ", vegetables);
// new array
 var food = fruit.concat(vegetables);
 console.log("food: ", food);
// take out 2 things starting at index 4
 food.splice(4,2)
 console.log("food: ", food);
// reverse array
 food.reverse();
  console.log("food: ", food);
// change array to string
  console.log(food.toString());
 