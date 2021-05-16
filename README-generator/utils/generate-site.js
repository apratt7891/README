function generateSite(answers) {
    return `
<h1 align="center">${answers.title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#test)
- [Questions](#questions)
## Installation
💾 ${answers.install}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.contribution}
## Tests
✏️ ${answers.test}
## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
    `;
  }
  
  module.exports = generateSite;