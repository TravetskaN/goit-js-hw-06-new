// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
const inputValid = document.querySelector("#validation-input");
const outputValid = inputValid.dataset.length;
function inputBorder(event) {
  return event.target.value.length == outputValid
    ? inputValid.setAttribute("class", "valid")
    : inputValid.setAttribute("class", "invalid");
}

inputValid.addEventListener("blur", inputBorder);
