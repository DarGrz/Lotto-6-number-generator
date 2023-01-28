function getLottoDrawResult() {
  const yourUrl =
    "https://www.lotto.pl/api/lotteries/draw-results/by-gametype?game=Lotto&index=1&size=10&sort=drawDate&order=DESC";
  fetch(yourUrl, {
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getLottoDrawResult();
