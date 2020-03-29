const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerArray = [];
const employeeArray = [];
const engineerArray = [];
const internArray = [];
let id = 0;
let exit = false;
const filename = 'index.html';

​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
​
​//Initial Question function to choose what Role for employee
const questionsInit = [{
    type: "list",
    message: "Insert team member role you wish to add:",
    name: "role",
    choices: ["Manager", "Employee", "Engineer", "Intern", "Exit"]
}];

//Base questions that can fit in to every role. Name and Email
const baseQuestions = [{
    type: "input",
    message: "Insert team member's name:",
    name: "name",
    validate: function validateName(name) {
      return name !== '';
    }
  },{
    type: "input",
    message: "Insert team member's email:",
    name: "email",
    validate: function validateName(name) {
      return name !== '';
    }
}];

//Questions for manager Role
const managerQuestions = [{
    type: "input",
    message: "Insert Managers office number:",
    name: "officeNumber",
    validate: function validateName(name) {
      return name !== '';
    }
}];

//Questions for engineer Role
const engineerQuestions = [{
    type: "input",
    message: "Insert engineer's Github username:",
    name: "username",
    validate: function validate(name) {
      return name !== '';
    }
}];

//Questions for intern Role
const internQuestions = [{
    type: "input",
    message: "Insert intern's school name:",
    name: "school",
    validate: function validateName(name) {
      return name !== '';
    }
}];

//Initiate the input collection
const inputInit = async () => {
    const { role, ...answers } = await inquirer.prompt(questionsInit);
    return role;
};

//Collect the inputs with chosen role and adding them then asking the questions about email and office number
const collectInputs = async (role) => {
  id = id + 1
  if (role === 'Manager') {
      console.log(boxen(chalk.white.bold(`Adding a new ${role} team member.`), { padding: 1, margin: 1, borderColor: 'blue', backgroundColor: 'blue' }))
      const questions = [...baseQuestions, ...managerQuestion];
      member = await inquirer.prompt(questions);
      const memberObj = new Manager(member.name, id, member.email, member.officeNumber);
      managerArray.push(memberObj);
  } else if (role === 'Engineer') {
      console.log(boxen(chalk.white.bold(`Adding a new ${role} team member.`), { padding: 1, margin: 1, borderColor: 'blue', backgroundColor: 'blue' }))
      const questions = [...baseQuestions, ...engineerQuestion];
      member = await inquirer.prompt(questions)
      const memberObj = new Engineer(member.name, id, member.email, member.github);
      engineerArray.push(memberObj);
  } else if (role === 'Intern') {
      console.log(boxen(chalk.white.bold(`Adding a new ${role} team member.`), { padding: 1, margin: 1, borderColor: 'blue', backgroundColor: 'blue' }))
      const questions = [...baseQuestions, ...internQuestion]
      member = await inquirer.prompt(questions)
      const memberObj = new Intern(member.name, id, member.email, member.school);
      internArray.push(memberObj);
  } else {
      console.log(boxen(chalk.black.bold(`Exiting the Add Member CLI`), { padding: 1, margin: 1, borderColor: 'yellow', backgroundColor: 'yellow' }))
      return exit = true;
  }
}

//write to the HTML with the writefile function
const writeHtml = (filename, data) => {
  fs.writeFile(filename, data, function (err) {
      if (err) console.log(err);
      console.log("File written successfully.");
  });
};

//initiate the whole app.js
const init = async () => {
  while (!exit) {
      const role = await inputStart();
      await collectInputs(role);
  }
  const html = await generateHtml(managerArray, engineerArray, internArray);
  writeHtml(filename, html);
}

init();




​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
