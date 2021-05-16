const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const generateSite = require('./utils/generate-site');
const { writeFile } = require('./utils/generate-site');




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
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
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
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter more information?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return generateSite(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
