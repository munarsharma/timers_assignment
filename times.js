

let options =['r','p','s'];

const readline = require ('readline');

const userInput = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

userInput.question(`Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice. \n`, (res) => {
 console.log(`User response: ${res}`)
 let compChoice = Math.floor(Math.random()*3)

    setTimeout (() => {
      console.log("The computer chose " + options[compChoice]);

   let choice1 = options[compChoice];
   let choice2 = res;


   function compare(choice1, choice2) {
       if(choice1 === 'r' && choice2 === 'p'){
       return console.log(" Congratulations! You win!")
     } else if (choice1 === 'r' && choice2 === 's'){
       return console.log('Computer wins Boo hoo !')
     }else if ( choice1 === 'p' && choice2 === 'r'){
      return console.log('Computer wins Boo hoo')
    } else if ( choice1 === 'p' && choice2 === 's'){
       return console.log('Congratulations! You win!')
     } else if (choice1=== 's' && choice2 === 'r'){
       return console.log('Congratulations! You win!')
     }else if (choice1 === 's' && choice2 === 'p') {
       return console.log('Computer wins Boo hoo')
     } else  {
       return console.log("it’s a tie")
     }
   }
   compare(choice1,choice2); }, 5000);

});
