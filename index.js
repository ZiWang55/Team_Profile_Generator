// initiate all the requirements
const inquier = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

// async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = "";

console.clear();
console.log("-----------------------------------");
console.log("Team Profile Generator by Zi Wang");

// main function to run app
async function main() {
  try {
    await prompt();

    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHtml = html.generateHTML(teamString);

    console.clear();
    console.log("---------------------------------------------");
    console.log("Generating index.html file....");
    console.log("---------------------------------------------");

    writeFileAsync("./dist/index.html", finalHtml);

    console.clear();
    console.log("---------------------------------------------");
    console.log("index.html file created successfully");
    console.log("---------------------------------------------");
  } catch (err) {
    return console.log(err);
  }
}

// inquier promts to gather user generated data
async function prompt() {
  let responseDone = "";

  do {
    try {
        console.log("---------------------------------------------");
        let response = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?: ",
                validate: function validateName(name){
                    return name !== '';
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter the employee's ID: ",
                validate: function validateName(name){
                    return name !== '';
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter the employee's email address: ",
                // Validate that it is an email using email-validator
                validate: function validateEmail(name){
                    return validator.validate(name);
                }
            },
            {
                type: "list",
                name: "role",
                message: "What what is the employee's role:",
                choices: [
                     "Engineer",
                     "Intern",
                     "Manager"
                ]
            }
        ]);

}