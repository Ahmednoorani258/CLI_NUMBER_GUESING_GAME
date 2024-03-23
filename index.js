#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgCyanBright.blue('Welcome to Noorani Number_Guessing_Game'));
let randomnum = Math.floor(Math.random() * 100 + 1);
console.log(randomnum);
while (true) {
    let input = await inquirer.prompt({
        name: "GuessedNumber",
        type: "number",
        message: "Pls guess the number between 1 - 100:"
    });
    let guessednum = input.GuessedNumber;
    //3)compare user input with computer number
    if (input.GuessedNumber === randomnum) {
        console.log("\nCongratulation!) You got it right!");
        break;
    }
    else {
        console.log(`wrong guess`);
    }
    if (input.GuessedNumber > randomnum) {
        console.log('\nYour number is too high');
    }
    else {
        console.log("\nYour number is too low");
    }
}
console.log(`Game over`);
