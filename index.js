// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
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
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'APACHE 2.0', 'None'],
    },
    {
        name:'contribution',
        type: 'input',
        message: 'What are your contribution guidelines?',
    },
    {
        name:'tests',
        type: 'input',
        message: 'What are the test instructions?',
    },
    {
        name: 'questions',
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
    console.log(response);
    fs.writeFile("README.md", generateMarkdown(response), err => 
    err ? console.log(err) : console.log('Success!'));
    // var genReadme = generateMarkdown(response);
    // writeToFile('README.md', genRead);
});

// // // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data), (err) => 
//     err ? console.log(err) : console.log('Success!'));
    
// };

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app

