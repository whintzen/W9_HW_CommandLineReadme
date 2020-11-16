# README.md Generator: Node.js and ES6+
  

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Description 

It is important to have a quality README with information about the app--what is the app for, how to use the app, 
how to install it, how to report issues, and how to make contributions so that other developers are more likely to 
use and contribute to the success of the project.
This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input 
about your project.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Links](#links)

* [Questions](#questions)

## Installation

Steps required to install project and how to get the development environment running:

To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the package.json:

`inquirer` that will prompt you for your inputs from the command line

`axios` will be used to fetch your information from the GitHub API

The application itself can be invoked with `node index.js`.

## Usage
Users can use the repo, but please do not delete any code.
When you run node index.js, the application uses the inquirer package to prompt you in the command line with a 
series of questions about your GitHub and about your project.
The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including 
your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of 
contents for the README conditionally based on your responses to the Inquirer prompts. The README will also include the MIT License badge for your GitHub repo.
Finally, fs.writeFile is used to generate your project's README.md file.

Check out the [ExampleProjectREADME.md](https://github.com/whintzen/W9_HW_CommandLineReadme/blob/master/ExampleProjectREADME.md) in this repo as an example.

## License
This project is licensed under the MIT license.
  
## Contributing
All contributions are welcome

## Tests
To run tests, run the following command:

```
npm test
```

## Links
* Github Repository: 
    [Github](https://github.com/whintzen/W9_HW_CommandLineReadme)
  
* Screencastify video: 
    [Video](https://drive.google.com/file/d/1MhJF_NumGGp92i7tk8TFHk8bSxFO20De/view?usp=sharing)
     
## Questions

If you have any questions about the repo, open an issue or contact me directly at wpah@comcast.net. You can find more of my work at [whintzen](https://github.com/whintzen/).

