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
 
  const listItems = []; 
  
  ingredients.forEach(function callback(ingredient) {
    const list = '<li class="item">' + ingredient + '</li>';
    listItems.push(list);
  });
  
  ul.insertAdjacentHTML('beforeEnd', listItems);
  
}  

createList();