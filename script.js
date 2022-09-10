const wynik = [];
const numbers = document.querySelector(".numbers");

const losowanie = () => {
  resetBtn.classList.remove("active");
  if (wynik.length === 1986) {
    return;
  }
  const div = document.createElement("div");
  div.classList.add("spanel");
  var arr = [];
  while (arr.length < 6) {
    var r = Math.floor(Math.random() * 49) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  wynik.push(arr);

  div.innerHTML = arr.map((num) => `<span>${num}</span>`).join("");
  numbers.appendChild(div);
};

const resetHandler = function () {
  location.reload();
};

const btnLos = document.querySelector(".btn-los");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetHandler);
btnLos.addEventListener("click", losowanie);
