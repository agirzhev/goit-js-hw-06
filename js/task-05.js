const imputText = document.querySelector('#name-input');
const element = document.querySelector('#name-output');
let text = '';

imputText.addEventListener("keydown", logMessage => {
  
  text = text + logMessage.key;

  element.textContent = text;


  //console.log(element)
  //if (text = '') {     
  //  element.textContent = 'Anonymous'
  //} else { element.textContent = text }
}  
);
