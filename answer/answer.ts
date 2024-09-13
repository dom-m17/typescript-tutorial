interface User {
    name: string;
    age: number;
  }
  
  const users: User[] = [];
  
  function addUser(name: string, age: number): void {
    users.push({ name: name, age: age });
  }
  
  function removeUser(name: string): void {
    const index = users.findIndex(user => user.name === name);
    if (index !== -1) {
      users.splice(index, 1);
    } else {
      console.log(`User ${name} not found.`);
    }
  }
  
  function listUsers(): void {
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