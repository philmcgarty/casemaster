// focus on text input box
document.getElementById("numberInput").focus()

// console.log("Connected")
function displayOutput(newText, displayArea) {
    let textOutput = document.getElementById(displayArea);
    textOutput.value = newText;
    // focuses on translated text and highlights/selects it
    textOutput.focus();
    textOutput.select();
}

// Copy button
const copyButton = document.getElementById("copyText");
copyText.addEventListener("click", copyFunction);

function copyFunction() {
    // Get the text field
    let copyText = document.getElementById("textOutput");
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

// All caps
const capsButton = document.getElementById("caps");
capsButton.addEventListener("click", capsFunction);

function capsFunction() {
    let textInput = document.getElementById("textInput").value.toUpperCase();
    //   console.log(textInput);
    displayOutput(textInput, "textOutput");
}

// Lowercase
const lowercaseButton = document.getElementById("lower");
lowercaseButton.addEventListener("click", lowFunction);

function lowFunction() {
    let textInput = document.getElementById("textInput").value.toLowerCase();
    //   console.log(textInput);
    displayOutput(textInput, "textOutput");
}

// First Letter Caps
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

const firstCaps = document.getElementById("firstUpper");
firstCaps.addEventListener("click", firstFunction);

function firstFunction() {
    let textInput = document.getElementById("textInput").value;
    // console.log(titleCase(textInput));
    displayOutput(titleCase(textInput), "textOutput");
}


// NUMBER FORMATTING FUNCTIONS BELOW

// Format input number
function numberFunction() {
    let number = document.getElementById("numberInput").value;
    // console.log(number);
    formattedNumber = parseInt(number).toLocaleString();

    var regex = /^[a-zA-Z]+$/;
    if (formattedNumber.match(regex)) {
        displayOutput("Enter numbers only", "numberInput");
    } else {
        displayOutput("", "numberInput");
        let successMessage = document.getElementById("successMessage");
        successMessage.innerHTML = formattedNumber + " copied to clipboard";
        //console.log(formattedNumber);

        // let copyNumber = document.getElementById("numberInput");
        // Copy the text inside the text field
        navigator.clipboard.writeText(formattedNumber);
    }
}

//Format multiple input numbers
function numbersFunction() {
    let numbers = document.getElementById("multiNumberInput").value;
    // convert list of numbers into array
    let numberList = numbers.split(/\s+/);
    let formattedList = [];
    // Loop through array
    for (var i = 0; i < numberList.length; i++) {
        // console.log(parseInt(numberList[i]).toLocaleString());
        formattedList.push(parseInt(numberList[i]).toLocaleString());
    }
    // console.log("Final list " + formattedList);
    document.getElementById("successMessageMulti").innerHTML = formattedList.join("<br>") + "<br>";
    let formattedNumbers = document.getElementById("successMessageMulti").innerText;
    displayOutput(formattedNumbers, "multiNumberInput");
    console.log(document.getElementById("successMessageMulti").innerText);
}


// Event listener for multiple number input button
const numbersInput = document.getElementById("addCommasMulti");
addCommasMulti.addEventListener("click", numbersFunction);

// Event listener for number input button
const addCommas = document.getElementById("addCommas");
addCommas.addEventListener("click", numberFunction);

// Get the input field
let input = document.getElementById("numberInput");
// Execute number input when the user releases "v" key on the keyboard
input.addEventListener("keyup", function (event) {
    // If the user releases the "v" key on the keyboard
    if (event.key === "v") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("addCommas").click();
    }
});
// Execute number input when the user presses enter key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("addCommas").click();
    }
});