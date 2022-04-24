const amountCreateDiv = document.querySelector('button[data-create=""]');
const amountDestroyDiv = document.querySelector('button[data-destroy=""]');
const amountInput = document.querySelector('#controls').firstElementChild;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  
  const boxes = document.querySelector('#boxes');
  let length = 30
  for (let i = 0; i < (Number(amountInput.value)); i += 1) {
  
    const list = document.createElement('div');
    list.className = `item`;
    list.style.width = `${length}px`
    list.style.height = `${length}px`
    length = length + 10
    list.style.background = getRandomHexColor();
    boxes.append(list)
  }
  
}

function destroyBoxes() {
  
  const boxeAll = document.querySelectorAll('.item');
  boxeAll.forEach(function callback(box) {
    box.remove();
  });

}

amountCreateDiv.addEventListener('click', createBoxes);
amountDestroyDiv.addEventListener('click', destroyBoxes);