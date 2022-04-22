const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createList = () => {
  
  const ul = document.querySelector('#ingredients');

  ingredients.forEach(function callback (ingredient) {
    const list = document.createElement('li');
    list.className = `item`;
    list.innerHTML = ingredient;
    ul.append(list)
  
  });

}  

createList();