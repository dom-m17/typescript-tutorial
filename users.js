// users.js

const users = [];

// Function to add a user
function addUser(name, age) {
  users.push({ name: name, age: age });
}

// Function to remove a user by name
function removeUser(name) {
  const index = users.findIndex(user => user.name === name);
  if (index !== -1) {
    users.splice(index, 1);
  } else {
    console.log(`User ${name} not found.`);
  }
}

// Function to list all users
function listUsers() {
  users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
  });
}

// Example usage
addUser("Alice", 25);
addUser("Bob", 30);
listUsers();
removeUser("Alice");
listUsers();