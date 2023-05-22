const listEl = document.querySelector("#categories");
const numberOfCategories = [...listEl.children].length;

console.log(`Number of categories: ${numberOfCategories}`);

[...listEl.children].forEach(li => {
  const categoryName = li.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  const categoryEl = [...li.querySelector("ul").children];
  console.log(`Elements: ${categoryEl.length}`);
});
