//console.log(document);
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`)

const h2рр = document.getElementsByTagName('H2');

h2рр.forEach(function (element, index, array) {
  console.log(`Category: ${element.textContent}`);
//  console.log(`Elements: ${textContent}`);
});

//console.log(h2);