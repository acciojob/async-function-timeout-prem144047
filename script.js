//your JS code here. If required.
const textInput = document.getElementById(text);
const delayOfMsg = documnet.getElementById(delay);
const outputDiv = document.getElementById(output);
const button = document.getElementById(btn);


function delay (ms) {
	return new Promise(resolve =>
		setTimeout(resolve, ms));
}

async function displayMessage() {
	const msg = textInput.value;
	const delayTime = parseInt(delayOfMsg.value, 10);

	if(isNaN(delayTime) || delayTime < 0){
		outputDiv.textContent = "Please enter a valid delay time.";
		return;
	}
	await delay(delayTime);
	outputDiv.textcontent = message;
}

button.addEventListener('click', (event) => {
	event.preventDefault();

	displayMessage();
	
});