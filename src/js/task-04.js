// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBnt = document.querySelector(".decrement");
const incrementBnt = document.querySelector(".increment");
const valueEl = document.querySelector("#value");
let counterValue = 0;

function decrement() {
  valueEl.textContent = counterValue -= 1;
}
function increment() {
  valueEl.textContent = counterValue += 1;
}
decrementBnt.addEventListener("click", decrement);
incrementBnt.addEventListener("click", increment);
