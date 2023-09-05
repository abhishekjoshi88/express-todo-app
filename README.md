# Todo App

## Description

The Todo App is a simple and efficient web application built using Express.js, MongoDB, and modern web technologies. This application allows users to create, manage, and track their tasks or to-do items effortlessly.

## Features

- **Create Todos**: Quickly add new tasks with titles and completion status.
- **Read Todos**: View a list of all your todos.
- **Update Todos**: Modify task details or mark them as completed.
- **Delete Todos**: Remove tasks you no longer need.
- **Clean User Interface**: A user-friendly and responsive design for easy task management.

## Tech Stack

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://mochajs.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your MongoDB connection in `db.js`.
4. Run the application with `npm start`.

## Usage

- Access the application in your web browser.
- Create, read, update, and delete todos as needed.
- Stay organized and keep track of your tasks effortlessly.

## Testing

### Running Tests

To ensure the reliability and functionality of the Todo App, we have implemented a set of tests using Mocha and Chai. To run the tests, follow these steps:

1. Install the project's dependencies if you haven't already with `npm install`.
2. Execute the test suite with the following command:

   ```bash
   npm test
   ```

---

# Test Cases

- Our test suite covers the following scenarios:

- GET /api/todos: Tests the endpoint for retrieving all todos.
- POST /api/todos: Tests the endpoint for creating a new todo.
- PUT /api/todos/:id: Tests the endpoint for updating a todo.
- DELETE /api/todos/:id: Tests the endpoint for deleting a todo.
