"use strict";
const imgWrapper = document.querySelector(".svg-wrapper");
const prise = document.querySelector(".prise");
const totalPrise = document.querySelector(".total-prise");
const input = document.querySelector("#input-count");
const inputs = document.querySelectorAll("#input-count");


let inputTotalPrise = function () {
  let resault = Number(input.value) * Number(prise.innerHTML);
  return resault;
};

Array.from(inputs).forEach((input) => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener("input", (e) => {
    const value = +input.value;
    if (value > max) {
      input.value = max;
    } else if (value < min) {
      input.value = min;
    }
  });
});

input.addEventListener("input", () => {
  totalPrise.innerHTML = inputTotalPrise();
});

imgWrapper.addEventListener("click", (event) => {
  if (event.target && event.target.matches("img.img-svg-up")) {
    if (Number(input.value) !== 42) {
      input.value++;
      totalPrise.innerHTML = inputTotalPrise();
    }
  }
  if (event.target && event.target.matches("img.img-svg-down")) {
    if (Number(input.value) !== 1) {
      totalPrise.innerHTML = inputTotalPrise() - Number(prise.innerHTML);
      input.value--;
    }
  }
});
