// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputName = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

function inputFontSize() {
  inputText.setAttribute("style", `font-size: ${inputName.value}px`);
}
inputName.addEventListener("input", inputFontSize);
