const apiKey = "e28684aadeefc2f9c7ee7d8aac257d9d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let btn = document.querySelector('button');
let inp = document.querySelector('input');


// async function checkWeather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     console.log(response);
// }

btn.addEventListener('click', async () => {
    let city = inp.value;
    await checkWeather(city);

})


inp.addEventListener('keypress', async (e) => {
    let city;
    if (e.key == "Enter") {
        city = e.target.value;
        await checkWeather(city);
    }

})


async function checkWeather(city) {
    await axios.get(apiUrl + `&appid=${apiKey}` + `&q=${city}`)
        .then((response) => {
            return (response.data);
        }).then((data) => {
            console.log(data);
            let cityName = document.querySelector('.city');
            let temp = document.querySelector('.temp');
            let humidity = document.querySelector('.humidity');
            let wind = document.querySelector('.wind');
            let icon = document.querySelector('.weather-icon');
            cityName.innerText = data.name;
            temp.innerText = `${Math.round(data.main.temp)}°C`;
            humidity.innerText = `${data.main.humidity}%`;
            wind.innerText = `${data.wind.speed} km/h`;
            let weather = data.weather[0].main;
            icon.setAttribute('src', `images/${weather.toLowerCase()}.png`);
            document.querySelector('.weather').style.display = "block";

        })
        .catch((e) => {
            console.log("Error : ", e);
            document.querySelector('.weather').style.display = "none";
            document.querySelector('.error').style.display = "block";
            setTimeout(() => {
                document.querySelector('.error').style.display = "none";
            },2000)
        })
}


window.addEventListener('DOMContentLoaded', () => checkWeather('Biratnagar'));