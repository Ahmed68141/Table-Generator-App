let numberInput = document.getElementById("number-input");
let limitInput = document.getElementById("limit-input");
let clearButton = document.getElementById("clear-button");
let messageOutput = document.querySelector(".message-output");
let generateButton = document.getElementById("generate-button");
let appContainer = document.querySelector("section.app-card");
let resultOutput = document.createElement("p");

generateButton.addEventListener("click", function() {
    let number = Number(numberInput.value);
    let limit = Number(limitInput.value);

    appContainer.appendChild(resultOutput);
    resultOutput.innerHTML = "";
    messageOutput.innerHTML = "";

    if (limit <= 1500) {
        if (number > 0 && limit > 0) {
            for (let i = 1; i <= limit; i++) {
                resultOutput.innerHTML += `${number} × ${i} = ${number * i} <br>`;
            }
        } else {
            messageOutput.innerHTML = `<h1 class="calculation-message">Cannot be calculated</h1>`;
            appContainer.appendChild(messageOutput);
        }
    } else {
        messageOutput.innerHTML = `<div class="error-message"><h1>Number cannot be greater than 1500 in Limit</h1></div>`;
        appContainer.appendChild(messageOutput);
    }
});

clearButton.addEventListener("click", function() {
    location.reload();
});