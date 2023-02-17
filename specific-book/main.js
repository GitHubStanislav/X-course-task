"use strict";
const imgButtonsForForm = document.querySelector(".svg-wrapper");
const formPriseValue = document.querySelector(".prise");
const formTotalPrise = document.querySelector(".total-prise");
const inputFormOrdering = document.querySelector("#input-count");
const inputsFor42MaxLogic = document.querySelectorAll("#input-count");


const inputTotalPrise = function () {
  return Number(inputFormOrdering.value) * Number(formPriseValue.innerHTML);

};

Array.from(inputsFor42MaxLogic).forEach((input) => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener("input", () => {
    const value = +input.value;
    if (value > max) {
      input.value = max;
    } else if (value < min) {
      input.value = min;
    }
  });
});

inputFormOrdering.addEventListener("input", () => {
  formTotalPrise.innerHTML = inputTotalPrise();
});

imgButtonsForForm.addEventListener("click", (event) => {
  if (event.target && event.target.matches("img.img-svg-up")) {
    if (Number(inputFormOrdering.value) !== 42) {
      inputFormOrdering.value++;
      formTotalPrise.innerHTML = inputTotalPrise();
    }
  }
  if (event.target && event.target.matches("img.img-svg-down")) {
    if (Number(inputFormOrdering.value) !== 1) {
      formTotalPrise.innerHTML = (inputTotalPrise() - Number(formPriseValue.innerHTML)).toString()
      inputFormOrdering.value--;
    }
  }
});
