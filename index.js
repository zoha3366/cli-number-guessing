#! /usr/bin/env
import inquirer from "inquirer";
const randomNUmber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        message: "please guess a number betwwen 1-6:",
        name: "UserGuessedNumber",
        type: "number",
    },
]);
if (answers.UserGuessedNumber === randomNUmber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("opps!you guessed wrong number");
}
