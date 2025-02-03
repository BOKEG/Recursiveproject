const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate ticket price
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Ask the user for their age
rl.question("Enter your age: ", (ageInput) => {
    let age = parseInt(ageInput);
    if (isNaN(age)) {
        console.log("Please enter a valid number for age.");
    } else {
        let price = getTicketPrice(age);
        console.log(`The price of the movie ticket is $${price}.`);
    }
    rl.close(); // Close the readline interface
});