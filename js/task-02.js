const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = ingredients.map(el => {
  const ingredient = document.createElement("li");
  ingredient.textContent = `${el}`;
  ingredient.classList.add("item");
  return ingredient;
});

const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...ingredientEl);
