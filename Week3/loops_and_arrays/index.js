var officeItemsArray = ["stapler", 
                        "monitor", 
                        "computer", 
                        "desk", "lamp", 
                        "computer", 
                        "lamp", 
                        "stapler",
                        "computer", 
                        "computer"];
var counts = {};

for (var i = 0; i < officeItemsArray.length; i++) {
  var word = officeItemsArray[i];
  counts[word] = counts[word] ? counts[word] + 1 : 1 ;
}
console.log(counts["computer"]);
      


var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name:"Mike",
   age: 12,
    gender:"male",
},{
    name:"Madeline",
    age: 80,
    gender:"female"
},{
    name:"Cheryl",
    age: 22,
    gender:"female"
},{
    name:"Sam",
    age: 30,
    gender:"male"
},{
    name:"Suzy",
    age: 4,
    gender:"female"
}

] 

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
   var j = peopleWhoWantToSeeMadMaxFuryRoad[i]
   var gender = "";
   
   
   
      if (j.gender == "male" ? gender ="He": gender = "She",j.age >=18){
        console.log( j.name + " is old enough. " + gender + " can go to see Mad Max fury road");
      } else {
      console.log( j.name + " is not old enough. " + gender + " can not go to see Mad Max fury road");
    }

  };
  

  var number = 0;
  for ( var i = 0; i <= 101; i++ ) {
      if (number % 2 === 0) {
          console.log(number + " is even number");
          number = number + 1;
      }else{
          console.log(number + " is odd number");
          number = number + 1;
      }
  }
   


                    