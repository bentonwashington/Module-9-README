// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = inquirer.prompt([
    {
        name: 'title',
        type:'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type:'input',
        message: 'Describe your project.',
    },
    {
        name: 'installation',
        type:'input',
        message: 'What are the installation instructions?',
    },
    {
        name: 'usage',
        type:'input',
        message: 'What is the usage information?',
    },
    {
        name: 'license',
        type:'list',
        message: 'Please choose a license for your application',
        choices: ['Public domain license', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary'],
    },
    {
        name:'contribution',
        type: 'input',
        message: 'What are your contribution guidelines?',
    },
    {
        name:'tests',
        type: 'input',
        message: 'What are the test insturctions?',
    },
    {
        name: 'github?',
        type:'input',
        message: 'What is your Github username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    },
])
.then((response) => {
    const filename = `${data.name}.json`;

})
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
