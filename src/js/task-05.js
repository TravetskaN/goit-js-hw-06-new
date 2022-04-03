// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.preventDefault();
  let inputText = event.target.value;

  outputName.textContent = inputText.length === 0 ? "Anonymous" : inputText;
}
