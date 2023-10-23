// focus on text input box
document.getElementById("textInput").focus()

// console.log("Connected")
function displayOutput(newText){
    let textOutput = document.getElementById("textOutput");
    textOutput.value = newText;
    // focuses on translated text and highlights/selects it
    textOutput.focus();
    textOutput.select();
}

// // Copy button
const copyButton = document.getElementById("copyText");
copyText.addEventListener("click", copyFunction);

function copyFunction(){
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
  displayOutput(textInput);
}

// Lowercase
const lowercaseButton = document.getElementById("lower");
lowercaseButton.addEventListener("click", lowFunction);

function lowFunction() {
    let textInput = document.getElementById("textInput").value.toLowerCase();
//   console.log(textInput);
  displayOutput(textInput);
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
    displayOutput(titleCase(textInput));
}

