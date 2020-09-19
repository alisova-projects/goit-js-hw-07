/*
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery:
<ul id="gallery"></ul>

Используй массив объектов images для создания тегов img вложенных в li.
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через 
css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
*/
const galleryContainerEl = document.querySelector("ul#gallery");
// console.log(galleryContainerEl);

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const makeGalleryItem = ({ url, alt }) => {
//   const galleryItemEl = document.createElement("li");
//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.alt = alt;
//   galleryImgEl.src = url;
//   galleryImgEl.width = 320;

//   galleryItemEl.append(galleryImgEl);

//   return galleryItemEl;
// };

// const elements = images.map(makeGalleryItem);

// galleryContainerEl.append(...elements);

const GALLERY_CLASS = "image-gallery";
const GALLERY_ITEM_CLASS = "image-gallery__item";
const GALLERY_IMAGE_CLASS = "image-gallery__image";

const createGalleryMarkup = (img) => {
  return img.reduce(
    (acc, { url, alt }) =>
      acc +
      `<li class='${GALLERY_ITEM_CLASS}'><img class='${GALLERY_IMAGE_CLASS}' src='${url}' alt='${alt}'></li>`,
    ""
  );
};

const galleryMarkup = createGalleryMarkup(images);

const galleryEl = document.querySelector("#gallery");
galleryContainerEl.classList.add(GALLERY_CLASS);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

// console.log(galleryContainerEl.innerHTML);
