//The getElementById() method returns the elements that have given an ID which is passed to the function
// The querySelectorAll() method in HTML is used to return a collection of an element’s child elements that match a specified CSS selector(s), as a static NodeList object.
// Selecting the buttons and initializing a counter variable
let StartBtn = document.querySelector(".start"); // Select the element with class 'start'
let countbtn = document.querySelector(".count"); // Select the element with class 'count'
let stopbtn = document.querySelector(".stop");   // Select the element with class 'stop'
let value = 0;  // Initialize a counter variable

// Event listener for StartBtn to log a message when clicked
StartBtn.addEventListener("click", () => {
    console.log("Clicked");
});

// Event listener for StartBtn to toggle its text and content when clicked
StartBtn.addEventListener("click", () => {
    // Check if StartBtn's text is 'Start'
    if (StartBtn.innerText == "Start") {
        // Change StartBtn's text to 'Begin'
        StartBtn.innerText = "Begin";
        // Change StartBtn's HTML content to include a span element
        StartBtn.innerHTML = '<span>Lets begin</span>';
    } else {
        // If StartBtn's text is not 'Start', change it back to 'Start'
        StartBtn.innerText = "Start";
    }
});

// Event listener for countbtn to increment the counter variable and update its text when clicked
countbtn.addEventListener("click", () => {
    // Increment the counter variable
    value++;
    // Update countbtn's text to display the current count
    countbtn.innerText = `Clicked ${value} this many times`;
    // Log the current count to the console
    console.log(value);
});

// Event listener for stopbtn to toggle a CSS class when clicked
stopbtn.addEventListener("click", () => {
    // Toggle the 'btn-red' class on stopbtn
    stopbtn.classList.toggle("btn-red");
});
