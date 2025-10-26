// dummy.js

// 1. Simple variable and console log
let userName = "John Doe";
console.log("Hello, " + userName + "! Welcome to the dummy JS file.");

// 2. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is:", sum);

// 3. Loop example
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4. Array example
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit, index) {
    console.log("Fruit " + (index + 1) + ": " + fruit);
});

// 5. Object example
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hi! My name is " + this.name + " and I am " + this.age + " years old.");
    }
};
person.greet();

// 6. DOM interaction (if used in HTML)
document.addEventListener("DOMContentLoaded", function() {
    // Create a button dynamically
    let button = document.createElement("button");
    button.textContent = "Click Me!";
    document.body.appendChild(button);

    // Add click event
    button.addEventListener("click", function() {
        alert("Button clicked! Hello " + userName);
    });
});

// 7. Simple conditional
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}
