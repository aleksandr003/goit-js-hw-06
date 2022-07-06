const categorItemsEl = document.querySelectorAll(".item").length;
const titleAnimallEl = document.querySelector(
  ".item:nth-child(1) h2"
).innerHTML;
const titleProductEl = document.querySelector(
  ".item:nth-child(2) h2"
).innerHTML;
const titleTechnologiEl = document.querySelector(
  ".item:nth-child(3) h2"
).innerHTML;
const animalslAllEl = document.querySelectorAll(".item:nth-child(1) li").length;
const productAllEl = document.querySelectorAll(".item:nth-child(2) li").length;
const technologiAllEl = document.querySelectorAll(
  ".item:nth-child(3) li"
).length;

console.log(`Number of categories: ${categorItemsEl}`);
console.log(`Category: ${titleAnimallEl}`);
console.log(`Elements: ${animalslAllEl}`);

console.log(`Category: ${titleProductEl}`);
console.log(`Elements: ${productAllEl}`);

console.log(`Category: ${titleTechnologiEl}`);
console.log(`Elements: ${technologiAllEl}`);
