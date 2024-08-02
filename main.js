#!/usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
async function main() {
    let todos = await inquirer.prompt([
        {
            name: "userInput",
            type: "list",
            choices: ["Add Tasks", "View Tasks", "Close TO DO list"],
        },
    ]);
    while (todos.userInput !== "Close TO DO list") {
        if (todos.userInput === "Add Task") {
            let addTask = await inquirer.prompt([
                {
                    name: "task",
                    type: "input",
                    message: "Enter task you want to do:",
                },
            ]);
            tasks.push(addTask.task);
        }
        else if (todos.userInput === "View Tasks") {
            console.log(tasks);
        }
        todos = await inquirer.prompt([
            {
                name: "userInput",
                type: "list",
                choices: ["Add Task", "View Tasks", "Close TO DO list"],
            },
        ]);
    }
}
main();
