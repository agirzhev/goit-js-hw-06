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
    const list = document.createElement("li") //'<li class="item">' + ingredient + '</li>';
    list.textContent = ingredient;
    list.className = "item";
    listItems.push(list.outerHTML);
  });
  const Items = listItems.join('') 
  ul.insertAdjacentHTML('beforeEnd', Items);
  
}  

createList();