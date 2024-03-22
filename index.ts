#!/usr/bin/env node

console.log(`Welcome to Noorani Number_Guessing_Game`);

import inquirer from "inquirer"

let randomnum:number = Math.floor(Math.random()*100 + 1);

while(true){
    let input = await inquirer.prompt(
    {
        name: "GuessedNumber",
        type: "number",
        message: "Pls guess the number between 1 - 100:"
    }
)


let guessednum = input.GuessedNumber;
//3)compare user input with computer number

if(input.GuessedNumber === randomnum){
    console.log("Congratulation!) You got it right!")
    break;
}else {console.log(`wrong guess`);
}

 if (input.GuessedNumber > randomnum){
    console.log('Your number is too high')
}else{console.log("Your number is too low");
}
}

console.log(`Game over`);




