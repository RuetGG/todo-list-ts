# TypeScript To-Do List App

This is a simple console-based To-Do application built using TypeScript.  
It allows users to add, remove, and display tasks in the terminal.

---

## ✨ Features

- Add a task
- Remove a task
- View all tasks

---

## 📁 File Structure

- `src/todo.ts` – Main TypeScript file containing logic
- `dist/todo.js` – Compiled JavaScript output
- `tsconfig.json` – TypeScript configuration (rootDir set to `./src`)
- `README.md` – Project overview and instructions

---

## 🚀 How to Run

### 1. Install TypeScript dependencies

npm install

### 2. Compile the TypeScript

tsc

### 3. Run the compiled JavaScript

node dist/todo.js

---

## Example used in the code 

addTask('Watch video');
addTask('Start React');
displayTask();
removeTask(2);
displayTask();
