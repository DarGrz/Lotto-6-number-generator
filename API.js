function getLottoDrawResult() {
  const yourUrl = "http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames";
  fetch(yourUrl, {
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getLottoDrawResult();
