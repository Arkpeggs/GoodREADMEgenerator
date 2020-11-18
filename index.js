// Dependencies and const
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project's title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process (if applicable): ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            type: "input",
            name: "license",
            message: "What is the license of this project?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of this projects (if applicable)?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "Where should I go if I have issues or questions?"
        },


    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {

        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        await writeFileAsync('./generate/README.md', generateContent);
        console.log('README.md written successfully!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  