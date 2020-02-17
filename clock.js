const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
function init(){
  getTime();
}
function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds =date.getSeconds();

/*
  if(hours<10){
    hours = `0${hours}`;
  }
  if(minutes<10){
    minutes = `0${minutes}`;
  }
  if(seconds<10){
    seconds = `0${seconds}`;
  }
  */
  clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
}
init();
setInterval(getTime,500);