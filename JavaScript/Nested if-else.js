// JavaScript program to illustrate nested-if statement

// Initialize a variable 'i' with the value 10
var i = 10;

// Check if 'i' is equal to 10
if (i == 10) {

    // First if statement
    // Check if 'i' is less than 15
    if (i < 15)
        console.log("i is smaller than 15");

    // Nested - if statement
    // This block will only be executed if the above condition (i < 15) is true
    if (i < 12)
        console.log("i is smaller than 12 too");
    else
        console.log("i is greater than 15");
}
