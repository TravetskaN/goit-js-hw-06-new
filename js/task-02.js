// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeCardsIngredients = (ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = `${ingredient}`;

  return ingredientsEl;
};

const ingridientsItems = ingredients.map((el) => {
  return makeCardsIngredients(el);
  // console.log(ingridientsItems);
});
const allIngredients = document.querySelector("#ingredients");
allIngredients.append(...ingridientsItems);
allIngredients.style.fontSize = "26px";
allIngredients.style.color = "cornflowerblue";
allIngredients.style.textShadow =
  "-1px 0px black, 0px -1px black, 1px 0px black, 0px 1px black, -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black";
console.log(allIngredients);
