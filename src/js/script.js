let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let data = `${hours}:${minutes}`;

minutes === 0 ? data = `${hours}:0${minutes}` : data;
hours <= 9 ? data = `0${hours}:${minutes}` : data;
hours <= 9 && minutes <= 9 ? data = `0${hours}:0${minutes}` : data;

console.log(data);

setInterval(() => {
  seconds++;
  seconds === 60 ? seconds = 0 : seconds;
  seconds === 0 ? minutes++ : minutes;
  minutes === 60 ? minutes = 0 : minutes;
  minutes === 0 ? hours++ : hours;
  hours === 24 ? hours = 0 : hours;
  data = `${hours}:${minutes}`;
  minutes <= 9 ? data = `${hours}:0${minutes}` : data;
  hours <= 9 ? data = `0${hours}:${minutes}` : data;
  hours <= 9 && minutes <= 9 ? data = `0${hours}:0${minutes}` : data;

  console.log(data);
}, 1000);