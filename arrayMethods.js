const users = [
  { id: 1, name: 'Tabish', age: 25 },
  { id: 2, name: 'Ahmed', age: 30 },
  { id: 3, name: 'Sara', age: 22 }
];

// Map - transform array
const names = users.map(user => user.name);
console.log('Names:', names);

// Filter - find specific items
const adults = users.filter(user => user.age >= 25);
console.log('Adults:', adults);

// Find - get single item
const user = users.find(u => u.id === 2);
console.log('Found user:', user);

// Reduce - calculate total
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log('Total age:', totalAge);
