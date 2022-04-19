const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createList = () => {
  const ul = document.querySelectorAll(`ingredients`);
  //list = [];

  ingredients.forEach(function callback (ingredient) {
    const list = document.createElement(`li`);
    list.className = `item`;
    list.innerHTML = ingredient;
    console.log(list)
    ul.insertAdjacentHTML(`beforeend`, list);   
  
  });
  //refs.body.appendChild(ul);
}  

createList();