const button = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", function () {
  
  document.body.style.background = getRandomHexColor();
  document.querySelector(".color").textContent = getRandomHexColor();

});

