function clock() {
  const date = new Date();
  let day = date.getDay();
  let dayOfMonth = (date.getDate() < 10 ? "0" : "") + date.getDate();
  let month = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = (date.getHours() + 1 < 10 ? "0" : "") + (date.getHours() + 1);
  const minutes =
    (date.getMinutes() + 1 < 10 ? "0" : "") + (date.getMinutes() + 1);
  const seconds =
    (date.getSeconds() + 1 < 10 ? "0" : "") + (date.getSeconds() + 1);

  showDate = document.querySelector("#date");
  showHour = document.querySelector("#hour");
  showDay = document.querySelector("#dayOfTheWeek");

  switch (day) {
    case 1:
      day = "poniedziałek";
      break;
    case 2:
      day = "wtorek";
      break;
    case 3:
      day = "środa";
      break;
    case 4:
      day = "czwartek";
      break;
    case 5:
      day = "piątek";
      break;
    case 6:
      day = "sobota";
      break;
    case 7:
      day = "niedziela";
      break;
    default:
      day = day;
  }

  showDay.innerHTML = day;

  showHour.innerHTML = hour + ":" + minutes + ":" + seconds;

  showDate.innerHTML = dayOfMonth + "/" + month + "/" + year;
}
clock();
setInterval(clock, 1000);
