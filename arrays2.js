// Practice: forEach method

let numbers = [1, 2, 3, 4, 5];

// Old way
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// New way (forEach)
console.log("\nUsing forEach:");
numbers.forEach(function(num) {
  console.log(num * 2);
});


console.log("\nUsing arrow function:");
numbers.forEach(num => console.log(num * 2));


let friends = ["Ahmed", "Sara", "Ali", "Fatima"];

console.log("\nGreeting friends:");
friends.forEach(friend => {
  console.log(`Hello, ${friend}!`);
});

console.log("\nWith index numbers:");
friends.forEach((friend, index) => {
  console.log(`${index + 1}. ${friend}`);
});
