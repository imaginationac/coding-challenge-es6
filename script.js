// Select the button element
// Select the header element
// Add an event listener to the button for the click event
// Change the text content of the header to "Working, Please Wait"
// Have a timeout of 5 seconds
// Change the text content of th header back to "Waiting".

let button = document.querySelector("button");
let header = document.querySelector("header");
const workingString = "Working, Please Wait";
const waitingString = "Waiting";
const timeToWaitInMs = 5000;


let changeHeaderTextToWorking = function (){
    header.textContent = workingString;
    setTimeout(changeHeaderTextToWaiting, timeToWaitInMs);
}

let changeHeaderTextToWaiting = function (){
    header.textContent = waitingString;
}

button.addEventListener("click", changeHeaderTextToWorking);