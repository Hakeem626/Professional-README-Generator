// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'], // Add other license options as needed
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },  
];

// Create a function to write README file
function writeToFile(fileName, data) {
  // Use the fs module to write data to a file
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} generated successfully!`);
    }
  });
}

// Create a function to initialize app
function init() {
  // Prompt the user for input using Inquirer
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content based on user input using your markdown generation functions
      const readmeContent = generateMarkdown(answers);

      // Write the README.md file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function call to initialize app
init();
