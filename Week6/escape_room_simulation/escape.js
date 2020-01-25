const readline = require("readline-sync")


let fName = readline.question(" What is your name?\n ");
    console.log('Hello ' + fName + "\n"  );
let options = Number(readline.question("What do you want to do?\n 1.Put your hand in a hole\n 2.Find the key:\n 3.Open the door: \n"));
   
    if(options ===1){
      console.log('You Are Dead, Game Over!!!\n')
      return;

      
     }else if(options === 2) {
         console.log('You Found The Key!!\n')  
        } 
        
       while (options === 3){
           console.log('Can not open door until you have the key!!!\n')
           return;
    }
    let options2 = Number(readline.question("Now what do you want to do?\n 1.Put your hand in a hole:\n 2.Find the key:\n 3.Open the door:\n"));
         while(options === 2){
          if (options2 === 3){
            console.log('Congratulations, You Opened The Door!!!')
            break;
        }else if( options2 ===1){
          console.log('You Are Dead, Game Over')
          break;

        }else if(options2 === 2){
          console.log('You Already Have The Key, Game Over!!!')
          break;
        }
    };
