/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

let counterValue = 0;
function increment() {
  //   console.log("клик на инкремент");
  counterValue += 1;
}
function decrement() {
  //   console.log("клик на декремент");
  counterValue -= 1;
}

const counterValueEl = document.querySelector("#value");
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

incrementBtn.addEventListener("click", function () {
  increment();
  counterValueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", function () {
  decrement();
  counterValueEl.textContent = counterValue;
});
