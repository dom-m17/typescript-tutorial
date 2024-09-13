# TypeScript Tutorial

In this repo, you will be introduced to the basics of TypeScript, why we use it, and will look at a basic example of TypeScript in action.

By the end of this tutorial, you will be able to set up a TypeScript environment and write basic TypeScript code.

Fork the repo and clone to your local device and follow along.

- Please note that this tutorial assumes foundational knowledge of JavaScript.


## What is TypeScript?

TypeScript is a **superset of JavaScript** that adds static typing, making it easier to catch errors during development. Developed by Microsoft, it compiles down to plain JavaScript, meaning it can run anywhere JavaScript does—whether in the browser, on the server (Node.js), or other platforms.

### Key Features

1. **Static Typing**:  
   TypeScript allows you to define types for variables, function parameters, and return values, helping to catch bugs early.

   ```typescript
   let message: string = "Hello, TypeScript!";
   let num: number = 10;
   let bool: boolean = true;
   let arr: Array<string> = ["array", "of", "strings"];
   let arr2: number[] = [1, 2, 3]
   let tuple: [string, number] = ["Alice", 25];
   ```

2. **Type Inference**:  
   TypeScript automatically infers types based on the initial assignment, reducing the need for explicit type declarations.

   ```typescript
   let count = 42;  // Inferred as a number
   ```

3. **Interfaces and Types**:  
   Interfaces define the structure of objects, providing more clarity and consistency in your code.

   ```typescript
   interface User {
     id: number;
     name: string;
   }

   const user: User = { id: 1, name: "Alice" };
   ```

4. **Modern JavaScript Support**:  
   TypeScript supports the latest JavaScript features (like classes, async/await), even if they aren't fully supported in all environments.

5. **Better Tooling**:  
   With TypeScript, code editors like Visual Studio Code offer features like autocompletion, type-checking, and refactoring, improving the developer experience.

6. **Enum**:

    Enums allow you to define a set of named constants. This is useful for variables that should have a limited set of values.

    ```typescript
    enum Color {
        Red,
        Green,
        Blue
    }

    let backgroundColor: Color = Color.Green;
    ```


7. **Special Types**:

    **Any**

   If you want to disable type checking for a particular variable, you can use the `any` type. This allows you to assign any type of value to that variable.

   ```typescript
   let randomValue: any = "Hello";
   randomValue = 42;  // No error, since `randomValue` can hold any type
   ```

    **Void**

   The `void` type is used to indicate that a function does not return a value.

   ```typescript
   function logMessage(message: string): void {
     console.log(message);
   }
   ```

    **Null and Undefined**

   TypeScript has `null` and `undefined` types, which represent absence of a value. You generally won’t use these types directly, but they can be used in certain cases.

   ```typescript
   let u: undefined = undefined;
   let n: null = null;
   ```

    **Union Types**

   A union type allows a variable to be one of several types. You define this using the pipe (`|`) symbol.

   ```typescript
   let id: number | string;
   id = 101;        // OK
   id = "101";      // Also OK
   ```


### Why Use TypeScript?

- **Early Error Detection**: Find bugs before runtime.
- **Scalability**: TypeScript makes large codebases easier to manage.
- **Enhanced Collaboration**: The type system serves as documentation, helping teams stay consistent.

---


TypeScript helps improve code quality, maintainability, and developer productivity, all while being easy to adopt. In the next sections, we’ll explore how to set up and use TypeScript in your project.



---

## Setting Up TypeScript

Before diving into TypeScript code, we need to set up a project that can compile and run it. In this section, you'll learn how to install TypeScript and configure it for your project.

### Step 1: Install TypeScript

First, you’ll need to install TypeScript using npm (Node Package Manager). If you don’t already have npm installed, make sure you install [Node.js](https://nodejs.org/) as it comes bundled with npm.

To install TypeScript globally, run the following command in your terminal:

```bash
npm install -g typescript
```

This allows you to use the `tsc` (TypeScript Compiler) command from anywhere on your machine.

### Step 2: Initialize a TypeScript Project

Next, navigate to your project directory and run the following command to create a `tsconfig.json` file, which holds the configuration for your TypeScript project:

```bash
tsc --init
```

The `tsconfig.json` file allows you to customize TypeScript’s behavior. By default, it’s configured to work with most projects, but you can tweak settings like the output directory or the target JavaScript version.

### Step 3: Write Your First TypeScript File

Navigate to the file called `index.ts` in your project folder. TypeScript files use the `.ts` extension.

```typescript
// index.ts
const message: string = "Hello, TypeScript!";
console.log(message);
```

### Step 4: Compile TypeScript

TypeScript needs to be compiled into JavaScript to run. To compile your TypeScript file, run:

```bash
tsc
```

This will compile all `.ts` files in your project and generate corresponding `.js` files. You should see a file called `index.js` in your project directory.

### Step 5: Run the JavaScript Output

Now, you can run the compiled JavaScript file using Node.js:

```bash
node index.js
```

You should see `Hello, TypeScript!` printed in the terminal.

### Step 6: Automate Compilation (Optional)

To streamline your workflow, you can use **watch mode** to automatically compile TypeScript files whenever they change. Run:

```bash
tsc --watch
```

This will continuously watch your `.ts` files and recompile them whenever you save changes.

---

### Conclusion

You’ve successfully set up TypeScript and compiled your first `.ts` file! Now, your project is ready for TypeScript development. In the following sections, we’ll work through a task written in TypeScript.

---

Certainly! Below are the instructions for your users to convert the `users.js` file to TypeScript, make it compliant with TypeScript standards, and run it:

---

## Converting `users.js` to TypeScript

There is a users.js file prepared for you, it’s time to convert it into TypeScript and make sure it’s compliant with TypeScript standards. 

If you get stuck, there is a solution provided in answer.ts inside the answer folder.

Follow the steps below:

Step 1: Rename the File

	•	Navigate to the file users.js.
	•	Rename the file from users.js to users.ts.

Step 2: Add Type Annotations

Now that the file is using TypeScript, you need to add type annotations. Open users.ts and:

	1.	Define the User Object Structure
Think about how you can represent the structure of a user in TypeScript. Create a way to describe the name and age properties of each user.
	2.	Annotate Variables
Ensure that the users array is defined to hold a list of user objects, rather than generic data.
	3.	Annotate Function Parameters
For each function, identify what types the parameters should have. What types should the addUser function accept? What type should removeUser expect?
	4.	Add Return Types
Specify what each function should return. Hint: not every function returns a value—make sure to indicate this where necessary.

After you’ve completed these steps, your code should be fully annotated and ready for TypeScript’s type-checking.

Step 3: Compile and Run the TypeScript File

Once you’ve made the necessary changes to your code:

	1.	Compile the TypeScript File
Use the TypeScript compiler to convert your .ts file into JavaScript. Look up the correct tsc command to compile the file.
	2.	Run the JavaScript File
After compilation, you should have a .js file. Use Node.js to run this file and verify that everything works as expected.

Step 4: Experiment and Improve (Optional)

Now that your TypeScript code is running successfully, try experimenting with the code:

	•	Add more users.
	•	Try removing users that don’t exist to test error handling.
	•	Modify the code and see how TypeScript’s type-checking helps catch errors before you even run the program.

By following these steps, you’ll learn how to apply TypeScript types to existing JavaScript code and run it successfully! Feel free to explore different type annotations and see how they improve your code quality.















---

This section gives a clear, quick introduction to basic types in TypeScript, setting up a strong foundation for more advanced concepts like interfaces and functions.