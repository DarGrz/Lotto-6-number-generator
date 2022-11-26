const wynik = [];
const wynik2 = [];
const numbers = document.querySelector(".numbers");
const numbersEuro = document.querySelector(".numbersEuro");
const numbersEuro2 = document.querySelector(".numbersEuro2");
const spanel = document.querySelector(".spanel");
const copyTxt = document.querySelector(".euro-btn");
const clipboard = document.querySelector("#clipboard");

const losowanie = () => {
  resetBtn.classList.remove("active");
  // Liczba możliwych losowań
  if (wynik.length === 6) {
    return;
  }
  // Ukrywa wyniki po pierwszym losowaniu
  if (wynik.length >= 0) {
    document.querySelector("#web-frame").style.display = "none";
  }
  const div = document.createElement("div");
  div.classList.add("spanel");
  var arr = [];
  while (arr.length < 6) {
    var r = Math.floor(Math.random() * 49) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  wynik.push(arr);
  div.innerHTML = arr.map((num) => `<span>${num}</span>`).join("");
  numbers.appendChild(div);
  numbers.style.display = "block";
};

// Losowanie Euro JackPot
const losowanieEuro = () => {
  if (wynik2.length === 6) {
    return;
  }
  resetBtn.classList.remove("active");
  const div = document.createElement("div");
  const div2 = document.createElement("div");

  div.classList.add("spanel");
  div.classList.add("euro");
  div2.classList.add("spanel");
  div2.classList.add("euro");
  var arrA = [];
  var arrB = [];
  while (arrA.length < 5) {
    var r = Math.floor(Math.random() * 50) + 1;
    if (arrA.indexOf(r) === -1) arrA.push(r);
  }
  while (arrB.length < 2) {
    var r = Math.floor(Math.random() * 12) + 1;
    if (arrB.indexOf(r) === -1) arrB.push(r);
  }

  arrA.sort(function (a, b) {
    return a - b;
  });

  arrB.sort(function (a, b) {
    return a - b;
  });

  wynik2.push(arrA);

  div.innerHTML = arrA.map((num) => `<span>${num}</span>`).join("");
  div2.innerHTML = arrB.map((num) => `<span>${num}</span>`).join("");
  numbersEuro.appendChild(div);
  numbersEuro.appendChild(div2);
  numbersEuro.style.display = "block";
};

function copyToCli() {
  console.log(numbers.innerText);
  const textarea = document.createElement("textarea");
  const copiedText = numbers.innerText;

  if (!copiedText) {
    return;
  }

  textarea.value = copiedText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

clipboard.addEventListener("click", copyToCli);

const resetHandler = function () {
  location.reload();
};

const btnLos = document.querySelector(".btn-los");
const btnLosEuro = document.querySelector(".btn-los-euro");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetHandler);
btnLos.addEventListener("click", losowanie);
btnLosEuro.addEventListener("click", losowanieEuro);
