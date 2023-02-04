const getLottoDrawResult = async () => {
  const response = await fetch("https://app.lotto.pl/wyniki/?type=dl", {
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const draws = await response.json();
  console.log(draws);
};
getLottoDrawResult();
