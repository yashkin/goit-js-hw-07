
const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach((item) => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }\nКоличество элементов: ${item.querySelector("ul").children.length}`
  );
});