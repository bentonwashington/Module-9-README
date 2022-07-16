// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Table of Contents 
---------------------------------------
## [Description](#description)
## [Installation](#installation)
## [Usage](#usage)
## [License](#license)
## [Contributing](#contributing)
## [Tests](#tests)
## [Questions](#questions)
-----------------------------------
# Description 
${data.description}

# Installation 
${data.installation}

# Usage 
${data.usage}

# License 
${renderLicenseSection(data.license)}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
https://github.com/${data.questions}
<br>
For additional questions, you can email me at ${data.email}. Thank you!!


`;
}

module.exports = generateMarkdown;
