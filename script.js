const result = [];
const container = document.querySelector("#container");

const losowanie = () => {
  reset.classList.remove("active");
  if (result.length === 6) {
    return;
  }

  const div = document.createElement("div");
  div.classList.add("poleLiczbowe");

  const wynikLosowania = [
    Math.floor(Math.random() * 49 + 1),
    Math.floor(Math.random() * 49 + 1),
    Math.floor(Math.random() * 49 + 1),
    Math.floor(Math.random() * 49 + 1),
    Math.floor(Math.random() * 49 + 1),
    Math.floor(Math.random() * 49 + 1),
  ];

  for (let i = 0; i < result.length; i++) {
    if (wynikLosowania === result[i]) {
      return losowanie;
    }
  }
  console.log(wynikLosowania);

  div.innerHTML = wynikLosowania.map((num) => `<span>${num}</span>`).join(" ");

  container.appendChild(div);
  result.push(wynikLosowania);
};

const onResetHandler = () => {
  location.reload();
};

const button = document.querySelector("button");
button.addEventListener("click", losowanie);
reset.addEventListener("click", onResetHandler);
