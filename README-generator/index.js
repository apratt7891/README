const inquirer = require('inquirer');
console.log(inquirer)
const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Your Project Title',
      message: 'What is the name of your project? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Enter the name of your project!');
          return false;
        }
      }
    },
  {
      type: 'input',
      name: 'description',
      message: 'Add a description of your project (Required)',
      validate: (descriptionInput) => {
        if(descriptionInput) {
        return true;
      } else {
        console.log('Enter a description of your project');
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Add installation instructions for your project(Required)',
      validate: (installationInput) => {
        if(installationInput) {
        return true;
      } else {
        console.log('Add installation instructions for your project');
        return false;
      } 
    } 
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Add usage information for your project(Required)',
      validate: (usageInput) => {
        if(usageInput) {
        return true;
      } else {
        console.log('Add usage information for your project');
        return false;
      }
      }}])}

promptUser().then(answers => console.log(answers));

