#!/ usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message:"select one of the operator from operations",
        type:"list",
        name:"operator",
        choices: ["add","sub","multyply","divid"],
    },
]);
//conditional statment if  - else
if(answers.operator==="add"){
    console.log(answers.firstNumber + answers.secondNumber)
}else if(answers.operator==="sub"){
    console.log(answers.firstNumber - answers.secondNumber)
}else if(answers.operator==="multyply"){
    console.log(answers.firstNumber * answers.secondNumber)
}else if(answers.operator==="divid"){
    console.log(answers.firstNumber / answers.secondNumber)
}else{
    console.log("invalid input")
}