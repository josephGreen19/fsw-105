const readline = require("readline-sync");
console.log("Hello, I hope your ready for a great Adventure !!!" + "\n");
let fName = readline.question(" What is your name?\n ");
console.log(
  "Hello " +
    fName +
    ", I will be here to give you options in your adventure along the way" +
    "\n"
);
function walkingAgain(name) {
  let movement = readline.question("Please enter w to walk around \n\n");
  console.log(name);
  if (movement === "w") {
    console.log("\nWalking...\n");
  } // Attack
  
  let attack = Math.random() * 100;
  if (attack < 5) {
    console.log("Your are being Attacked by a Troll !!!");
  } else if (attack < 10) {
    console.log("Your are being Attacked by a Ogre !!!");
  } else if (attack < 15) {
    console.log("Your are being Attacked by a Zombie !!!");
  } else if (attack < 20) {
    console.log("Your are being Attacked by a Goblin !!!");
  } else if (attack < 25) {
    console.log("Your are being Attacked by a Skeleton !!!");
  } 
  
  while ((attack < 5, attack < 10, attack < 15, attack < 20, attack < 25)) {
    let fightFlee = readline.question("Would you like to attack or run? \n\n");
    if (fightFlee === "attack") {
      let damage = readline.question("min or max attack?\n\n");
      let min = Math.floor(Math.random() * 50) + 1;
      let max = Math.floor(Math.random() * 100) + 50;
      while (damage === "min") {
        if (min < 25) {
          console.log("you have done no damage");
        } else if (min < 50) {
          console.log("you have done " + min + " damage");
        }
        return;
      }
      while (damage === "max") {
        if (max <= 75) {
          console.log("you have done " + max + " damage");
        }
        if (max >= 75) {
          console.log("you have defeated your enemy");
        }
        return;
      }
      console.log("you fought back\n");
    } else {
      
      let chance1 = Math.floor(Math.random() * 100);
      var escapeChance = readline.question("choose 1 or 2 to escape");
    //  
       while (escapeChance === "1") {
        if (chance1 > 50) {
          console.log("you escaped");
         walkingAgain(name)
         break
        } else {
          console.log("you did not escape enemy attacks you for " + attack + " damage");
           
          break;
        }}   
            while (escapeChance === "2") {
          if (chance1 > 50) {
            console.log("you did not escape enemy attacks you for " + attack + " damage\n");
            break;

          } else if (chance1) {
            console.log("you escaped\n");
            walkingAgain(name)
            break;
          }
          return;
        }
    }
  }
  if (attack < 100) {
    console.log("no enimies nearby");
  } // Continue walking
  let stayRun = readline.question("continue walking?\n\n");
  if (stayRun === "yes") {
    console.log("continue walking...");
    return walkingAgain(fName);
  }
}
walkingAgain(fName);