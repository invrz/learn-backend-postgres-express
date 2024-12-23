## Setup Your Node.js Environment

### What is Node.js and Why Use It for Backend Development?

Node.js is an open-source, cross-platform JavaScript runtime that allows developers to build server-side applications using JavaScript. Unlike traditional server-side technologies, which use languages like Java or Python, Node.js enables developers to use a single language (JavaScript) for both frontend and backend development. This streamlines development and allows for efficient data synchronization between the client and the server.

Node.js is built on the V8 JavaScript engine, making it highly performant and ideal for building scalable and real-time applications.

### Hello World in Node.js

#### Setting Up the Messaging App Project Folder

By the end of these masterclasses you should have developed a messaging application so let's start by setting up the project folder for our messaging app and creating a basic project structure. Open your terminal and follow these steps:

1. **Create a Project Directory:** Create a new directory for your messaging app project.

   ```bash
   mkdir messaging-app
   cd messaging-app
   ```

2. **Initialize a Node.js Project:** Run the following command to initialize a Node.js project. This will create a `package.json` file to manage project dependencies.

   ```bash
   npm init -y
   ```

3. **Install Express.js:** While we'll focus on Node.js in this module, we'll soon integrate Express.js for building our backend APIs.

   ```bash
   npm install express
   ```

#### Hello World Script

Let's write a simple "Hello World" script in Node.js to ensure everything is set up correctly.

1. **Create a File:** Create a file named `hello.js` in your project directory.

2. **Edit `hello.js`:** Open `hello.js` in a code editor and add the following code:

   ```javascript
   console.log("Hello, Node.js!");
   ```

3. **Run the Script:** In your terminal, navigate to the project directory and run the script using Node.js.

   ```bash
   node hello.js
   ```

   You should see the output: "Hello, Node.js!".

### How to Add and Run Node.js Scripts

Node.js allows you to execute scripts directly from the command line. Here's how you can create and run scripts:

1. **Create a New Script:** You can create new scripts by creating JavaScript files with the `.js` extension.

2. **Write Your Code:** Add your JavaScript code to the script file. This code can include various operations, functions, and modules.

3. **Run the Script:** In your terminal, use the `node` command to run the script.

   ```bash
   node script-name.js
   ```

### Starter Codebase and Project Structure

I've prepared a basic starter codebase and project structure for your messaging app. You can expand upon this structure as you progress through the masterclass.

- `messaging-app/`
  - `node_modules/` (created when you install dependencies)
  - `src/`
    - `hello.js` (Your "Hello World" script)
  - `.gitignore` (List of files/folders to ignore in version control)
  - `package.json` (Project configuration and dependencies)
  - `package-lock.json` (Generated automatically to ensure consistent installs)
  - `README.md` (Project documentation)

---

##### The End

Congratulations! You've learned about Node.js, its advantages in backend development, and you've successfully set up your messaging app project. By creating a basic "Hello World" script, you've confirmed that your Node.js environment is ready for development. In the next modules, we'll dive deeper into using Node.js for building the backend of our messaging app.

Feel free to expand the project structure as you add more functionalities to your messaging app. This modular approach will help keep your codebase organized and maintainable.

Stay tuned for the upcoming masterclass modules where we'll explore various aspects of Node.js development further!