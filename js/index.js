const userInput = document.querySelector(".input-area");
const translateBtn = document.querySelector(".translate-btn");
const userOutput = document.querySelector(".output-area");

let url = "https://api.funtranslations.com/translate/vulcan.json";

function clickEventAction(userInput) {
  let payload = userInput.value;
  url = url + `?text=${payload}`;
  fetch(url)
    .then((response) => response.json())
    .then(
      (vulcanJSON) => (userOutput.innerText = vulcanJSON.contents.translated),
    );
}

translateBtn.addEventListener("click", clickEventAction);
