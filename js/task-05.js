const inputText = document.querySelector('#name-input');
const element = document.querySelector('#name-output');
let text = '';


inputText.addEventListener("keyup", logMessage => {
  
  if (inputText.value === "") {
    text = 'Anonymous';
  }else{text = inputText.value}

  element.textContent = text;

  }  
);
