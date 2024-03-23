#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgCyanBright.blue('Welcome to Noorani Number_Guessing_Game'));
let randomnum = Math.floor(Math.random() * 100 + 1);
while (true) {
    let input = await inquirer.prompt({
        name: "GuessedNumber",
        type: "number",
        message: "Pls guess the number between 1 - 100:"
    });
    let guessednum = input.GuessedNumber;
    //3)compare user input with computer number
    if (input.GuessedNumber === randomnum) {
        console.log(chalk.green("Congratulation! You got it right!"));
        break;
    }
    else {
        console.log(chalk.redBright(`wrong guess`));
        if (input.GuessedNumber > randomnum) {
            console.log(chalk.bgRed('\nYour number is too high'));
        }
        else {
            console.log(chalk.bgRed('\nYour number is too low'));
        }
    }
}
console.log(`Game over`);
