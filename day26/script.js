let secondhand = document.getElementById("secHand");
let minutehand = document.getElementById("minHand");
let hourhand = document.getElementById("hourHand");

let sectxt = document.getElementById("seconds");
let mintxt = document.getElementById("minutes");
let hourtxt = document.getElementById("hours");

function updateTime() {
  let time = new Date();

  let currentHour = time.getHours() % 12;
  let currentMinute = time.getMinutes();
  let currentSecond = time.getSeconds();

  // Update digital clock
  hourtxt.textContent = String(currentHour).padStart(2, "0");
  mintxt.textContent = String(currentMinute).padStart(2, "0");
  sectxt.textContent = String(currentSecond).padStart(2, "0");

  // Convert to degrees
  let hdeg = currentHour * 30 + currentMinute * 0.5 - 90;
  let mdeg = currentMinute * 6 - 90;
  let sdeg = currentSecond * 6 - 90;

  hourhand.style.transform = `rotate(${hdeg}deg)`;
  minutehand.style.transform = `rotate(${mdeg}deg)`;
  secondhand.style.transform = `rotate(${sdeg}deg)`;
}

// Run every second
setInterval(updateTime, 1000);
updateTime();
