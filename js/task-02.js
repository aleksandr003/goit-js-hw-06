const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elemsAllIngredients = ingredients.map((el) => {
  const newArr = document.createElement("li");
  newArr.innerHTML = el;
  newArr.classList.add("item");
  return newArr;
});

ingredientsEl.append(...elemsAllIngredients);
