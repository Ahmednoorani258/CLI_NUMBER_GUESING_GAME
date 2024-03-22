import inquirer from "inquirer";
//1)computer will generate a random number
let randomnum = Math.floor(Math.random() * 100 + 1);
//2)user input for guessing number
const GuessNumber = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "Pls guess the number between 1 - 100."
    }
]);
console.log(GuessNumber);
//3)compare user input with computer number
if (GuessNumber.GuessedNumber === randomnum) {
    console.log("Congratulation!) You got it right!");
}
else if (GuessNumber.GuessedNumber > randomnum) {
    console.log('Your number is too high');
}
else if (GuessNumber.GuessedNumber < randomnum) {
    console.log(`your number is to low`);
}
