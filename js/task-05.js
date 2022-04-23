const inputText = document.querySelector('#name-input');
const element = document.querySelector('#name-output');
let text = '';

inputText.addEventListener("keydown", logMessage => {
  
  text = text + logMessage.key;

  element.textContent = text;

}  
);
