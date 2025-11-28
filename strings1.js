
let name = "Tabish Abbas";
let email = "TABISH@EMAIL.COM";


console.log("Name length:", name.length);


console.log("Uppercase:", name.toUpperCase());


console.log("Lowercase:", email.toLowerCase());


console.log("Has 'Abbas'?", name.includes("Abbas"));


let parts = name.split(" ");
console.log("First name:", parts[0]);
console.log("Last name:", parts[1]);


let newEmail = email.replace("EMAIL", "gmail");
console.log("New email:", newEmail.toLowerCase());


let sentence = "I am learning JavaScript and Node.js";
console.log("\nMy sentence:", sentence);
console.log("Word count:", sentence.split(" ").length);
console.log("Has 'JavaScript'?", sentence.includes("JavaScript"));
