function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // let session = "PM";
  if (hour === 0) {
    hour = 24;
  }
  if (hour > 24) {
    hour = hour - 12;
    // session = "PM";
  }
  hour = hour < 10 ? "0" : hour;
  min = min < 10 ? "0" : min;
  sec = sec < 10 ? "0" : sec;
  let time = hour + ":" + min + ":" + sec;

  document.getElementById("klok").innerText = time;

  let t = setTimeout(() => {
    currentTime();
  }, 1000);
}
currentTime();
