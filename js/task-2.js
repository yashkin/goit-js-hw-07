const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const newListItem = ingredients.map((ingredient) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  listEl.appendChild(newIngredient);

  return newIngredient;
});
console.log(newListItem);