let numberInput = document.getElementById("number-input");
let limitInput = document.getElementById("limit-input");
let clearButton = document.getElementById("clear-button");
let messageOutput = document.querySelector(".message-output");
let generateButton = document.getElementById("generate-button");
let appContainer = document.querySelector("section.app-card");
let resultBox = document.querySelector(".result-box");
let resultOutput = document.createElement("p");

generateButton.addEventListener("click", function() {
    let number = Number(numberInput.value);
    let limit = Number(limitInput.value);

    resultBox.appendChild(resultOutput);
    resultOutput.innerHTML = "";
    messageOutput.innerHTML = "";

    if (limit <= 1500) {
        if (number > 0 && limit > 0) {
            generateButton.textContent="Generating...";
            generateButton.disabled=true;
            setTimeout(function(){

            for (let i = 1; i <= limit; i++) {
                resultOutput.innerHTML += `${number} × ${i} = ${number * i} <br>`;
            }
            numberInput.value = "";
            limitInput.value = "";
            generateButton.textContent="Generate Table"
            generateButton.disabled=false;

            },0)
        } else if (numberInput.value === "" || limitInput.value === "") {
            messageOutput.innerHTML = `<h1 class="calculation-message">Fill both inputs</h1>`;
        } else {
            messageOutput.innerHTML = `<h1 class="calculation-message">Zero Cannot be calculated</h1>`;
        }
    } else {
        messageOutput.innerHTML = `<div class="error-message"><h1>Number cannot be greater than 1500 in Limit</h1></div>`;
    }
});

clearButton.addEventListener("click", function() {
    resultOutput.innerHTML = "";
    messageOutput.innerHTML = "";
});