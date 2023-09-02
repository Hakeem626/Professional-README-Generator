// Function to render the license badge
function renderLicenseBadge(license) {
    if (license) {
      // Replace 'License' with the actual license name or badge URL based on your preferred badge service (e.g., shields.io).
      return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
    }
    return '';
  }
  
  // Function to render the license link
  function renderLicenseLink(license) {
    if (license) {
      // Replace 'License' with the actual license name or link based on your preferred license source (e.g., choosealicense.com).
      return `[License](https://opensource.org/licenses/${license})`;
    }
    return '';
  }
  
  // Function to render the license section of README
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  
  This project is licensed under the ${license} License. See the [${license} License](${renderLicenseLink(license)}) for details.
  
  `;
    }
    return '';
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    const { title, description, installation, usage, contributing, tests, license, username, email } = data;
  
    return `# ${title}
  ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ${renderLicenseSection(license)}
  
  ## Questions
  
  If you have any questions, please feel free to reach out to me via GitHub:
  
  GitHub: [${username}](https://github.com/${username})
  
  Or you can email me at: [${email}](mailto:${email})
  `;
  }
  
  module.exports = generateMarkdown;
  