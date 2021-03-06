// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallaryEl = document.querySelector(".gallery");
console.log(gallaryEl);

const galleryCreate = ({ url, alt } = {}) => {
  return `<li class="gallery-item">
        <img src="${url}" alt="${alt}" width="400" height="300">
    </li>`;
};

const gallaryCards = images.map((el) => {
  return galleryCreate(el);
});

gallaryEl.insertAdjacentHTML("beforeend", gallaryCards.join(""));

gallaryEl.style.display = "flex";
gallaryEl.style.flexWrap = "nowrap";
gallaryEl.style.justifyContent = "space-evenly";
gallaryEl.style.listStyle = "none";
