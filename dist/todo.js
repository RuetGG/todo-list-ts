"use strict";
let todo = [
    { id: 1, name: 'Finish task 2' }
];
let nextId = 1;
function addTask(task) {
    const newTask = {
        id: nextId++,
        name: task,
    };
    todo.push(newTask);
    console.log(`${newTask.name} has been succesfully added`);
}
function removeTask(id) {
    todo = todo.filter(task => task.id !== id);
    console.log(`${id} has been removed`);
}
function displayTask() {
    console.log("These are all the tasks you have");
    todo.forEach(task => {
        console.log(task.name);
    });
}
addTask('Watch video');
addTask('Start react');
displayTask();
removeTask(2);
displayTask();
//# sourceMappingURL=todo.js.map