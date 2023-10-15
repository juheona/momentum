const API_KEY = "b2da00c1b40132d7861344eca039ff3e";
// 4ea1b44f31d00385494803f26be34255

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#city");
            const condition = document.querySelector("#condition");
            const icon = document.querySelector("#weather img");
            const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            city.innerText = data.name;
            icon.setAttribute('src', iconURL);
            condition.innerText = `${(data.main.temp).toFixed(1)} °C`;
        });
}
function onGeoError() {
    alert("Can't find you. No wearther for you.");
    document.querySelector("#weather").innerText = "No\nWeather\nService"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);