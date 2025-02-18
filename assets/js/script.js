// focus on text input box
document.getElementById("textInput").focus()

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
    // console.log(formattedNumber);
    var regex=/^[a-zA-Z]+$/;
    if (formattedNumber.match(regex)){
        displayOutput("Enter numbers only", "numberInput");
    }else{
    displayOutput("", "numberInput");
    // let copyNumber = document.getElementById("numberInput");
    // Copy the text inside the text field
    navigator.clipboard.writeText(formattedNumber);
    }
}

// Event listener for number input button
const addCommas = document.getElementById("addCommas");
addCommas.addEventListener("click", numberFunction);

// // Number Copy button
// const numberCopyButton = document.getElementById("copyNumber");
// copyNumber.addEventListener("click", numberCopyFunction);

// function numberCopyFunction(){
//     // Get the text field
//   let copyNumber = document.getElementById("numberOutput");
//    // Copy the text inside the text field
//   navigator.clipboard.writeText(copyNumber.value);
// }