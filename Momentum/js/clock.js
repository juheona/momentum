const clock = document.querySelector("#hour");
const sec = document.querySelector("#second")
const todayDay = document.querySelector("#day");
const todayDate = document.querySelector("#date");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getClock() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const dates = date.getDate();
    const day = days[date.getDay()];
    let hours = String(date.getHours()%12);
    if (hours == "0") {
        hours = "12";
    }
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}`;
    todayDate.innerText = `${years}-${months}-${dates} ${day}.`;
    sec.innerText = seconds;
}

getClock();
setInterval(getClock, 1000);