// Get the elements from the DOM
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const button = document.getElementById('btn');

// Function to simulate delay
function delay(ms) {
    return new Promise(resolve =>
		setTimeout(resolve, ms));
}

// Async function to handle the message display
async function displayMessage() {
    // Retrieve values from input fields
    const message = textInput.value;
    const delayTime = parseInt(delayInput.value, 10);

    // Check if delayTime is a valid number
    if (isNaN(delayTime) || delayTime < 0) {
        outputDiv.textContent = "Please enter a valid delay time.";
        return;
    }

    // Wait for the specified delay
    await delay(delayTime);

    // Display the message in the output div
    outputDiv.textContent = message;
}

// Attach event listener to the button
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    displayMessage();
});