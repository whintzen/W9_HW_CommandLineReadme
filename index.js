const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },{
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "repo",
    message: "What is the name of your Github repo?",
    default: "CommandLineReadme"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    default: "Project Title"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    defaut: "Project Description"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
  
];

//Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//function to initialize the program
function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

// function call to initialize the program
init();
