
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`)

//const items = [...document.querySelectorAll(".item")];
const items = [...categories];
items.forEach(function (item) {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].childElementCount}`);
});