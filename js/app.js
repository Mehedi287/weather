const weather = document.getElementById('search-btn');
const inputCity = document.getElementById('user-input');
const cityName = document.getElementById('cityName')
const temp = document.getElementById('temp')
const clouds = document.getElementById('clouds')
weather.addEventListener('click', function () {
    const InputCityName = inputCity.value;
    if (InputCityName == '') {
        alert("Plasr Inter a Valide City Name")
    }
    inputCity.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${InputCityName}&appid=c8f177b8dffdbcf3b3b2b2229a78f046&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod == 404) {
                alert("plase inter a valide city name")
            }
            else {
                temp.innerText = data.main.temp;
                clouds.innerText = data.clouds.all;
                cityName.innerText = InputCityName;
            }
        })
})