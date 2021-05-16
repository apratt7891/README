const fs = require("fs");
const util = require('util');
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site');

const writeFile  = util.promisify(fs.writeFile);



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
        console.log('Please enter a description of your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'Add installation instructions for your project(Required)',
      validate: installInput => {
        if (installInput) {
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
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
        console.log('Add usage information for your project');
          return false;
        }
      }
    },
    {  
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use for this project? (Check all that apply)',
        choices: ['MIT', 'Apache', 'GNU', 'ES6', 'Other']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contributing information for your project (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Enter contributing information for your project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test information for your project (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Enter testing information for your project');
            return false;
          }
        }
      },
    ])}
   
async function displayReadMe() {
  try {
    const pageData = await promptUser();
    const displayContent = generateSite(pageData);

    await writeFile('./dist/README.md', displayContent);
    console.log('File created!');
  } catch(err) {
    console.log(err);
  }
  }

    
displayReadMe();
    
