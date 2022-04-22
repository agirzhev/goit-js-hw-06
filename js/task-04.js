const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const handleClickPlus = () => {
  
  counterValue = counterValue + 1;
  const element = document.querySelector('#value');
  element.textContent = counterValue;
  
};

const handleClickMinus = () => {
  
  counterValue = counterValue - 1;
  const element = document.querySelector('#value');
  element.textContent = counterValue;
  
};

buttonIncrement.addEventListener("click", handleClickPlus);
buttonDecrement.addEventListener("click", handleClickMinus);
