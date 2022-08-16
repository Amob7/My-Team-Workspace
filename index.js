const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function addTeammate() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Do you want to add another Teammate"
            }
        ])
        .then(val => {
            if(val.choice) {
                teammate();
            }
            else {
                console.log("Html updated with your information")
                process.exit(0)
            }
        })
}

function teammate() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "role",
                message: "What is this teammates role"
            }
        ])
        .then((answer) => {
            console.log(answer)
            if(answer.role === "engineer") {
                inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this engineer's name",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is this engineer's email",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is this engineer's github"
                    }
                ])
                .then((answers) => {
                    const engineer = new Engineer(answers.name, answers.email, answers.github);
                const file = () =>
                `  <section class="card border-dark m-5" style="width: 18rem;">
                <section class="bg-primary mb-3 text-white">
                  <h2 class="card-title ml-2 mt-2 mb-0">${getname()}</h2>
                  <h3 class="card-subtitle mb-2 ml-3 mt-0"><i class="fa fa-coffee" style="font-size:48px;color:white"></i>${getRole()}</h3>
                </section>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${getId()}</li>
                  <li class="list-group-item">Email: ${getEmail()}</li>
                  <li class="list-group-item">: ${getGithub()}</li>
                </ul>
              </section>`
            
   
                fs.appendFile('index.html', file, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
                );

                })
                
            }
            else if(answer.role === "intern") {
                inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this engineer's name",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is this engineer's email",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is this engineer's github"
                    }
                ])
                const engineer = new Engineer(name, email, github);
                id += 1
                const file = ({name, email}) =>
                `  <section class="card border-dark m-5" style="width: 18rem;">
                <section class="bg-primary mb-3 text-white">
                  <h2 class="card-title ml-2 mt-2 mb-0">${name}</h2>
                  <h3 class="card-subtitle mb-2 ml-3 mt-0"><i class="fa fa-coffee" style="font-size:48px;color:white"></i>${getRole()}</h3>
                </section>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <li class="list-group-item">: ${getGithub()}</li>
                </ul>
              </section>`
            
   
                fs.appendFile('index.html', file, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
                );

            }
            else {
                inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this engineer's name",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is this engineer's email",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is this engineer's github"
                    }
                ])
                const engineer = new Engineer(name, email, github);
                id += 1
                const file = ({name, email}) =>
                `  <section class="card border-dark m-5" style="width: 18rem;">
                <section class="bg-primary mb-3 text-white">
                  <h2 class="card-title ml-2 mt-2 mb-0">${name}</h2>
                  <h3 class="card-subtitle mb-2 ml-3 mt-0"><i class="fa fa-coffee" style="font-size:48px;color:white"></i>${getRole()}</h3>
                </section>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <li class="list-group-item">: ${getGithub()}</li>
                </ul>
              </section>`
            
   
                fs.appendFile('index.html', file, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
                );

            }
        })
}

addTeammate()


