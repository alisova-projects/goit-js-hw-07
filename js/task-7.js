/*
Напиши скрипт, который реагирует на изменение значения
input#font-size-control(событие input) и изменяет
инлайн-стиль span#text обновляя свойство font-size.
В результате при перетаскивании ползунка будет меняться
размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   if (+event.currentTarget.value === 100) {
//     spanEl.style.fontSize = "36px";
//     return;
//   }
//   if (+event.currentTarget.value === 0) {
//     spanEl.style.fontSize = "10px";
//     return;
//   }
//   spanEl.style.fontSize = null;
// }

function onInputChange(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
