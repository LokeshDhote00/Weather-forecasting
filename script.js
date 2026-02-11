
const apiKey = '3a3cd9a73955255839d26432da75e476'; 

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert("Please enter a city or country name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("City not found!");
        return;
      }

      document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('weatherDesc').textContent = data.weather[0].main + " - " + data.weather[0].description;
      document.getElementById('temp').textContent = `🌡 Temperature: ${data.main.temp}°C`;
      document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
      document.getElementById('wind').textContent = `🌬 Wind Speed: ${data.wind.speed} m/s`;

      document.getElementById('weatherCard').classList.remove('hidden');

      setBackground(data.weather[0].main.toLowerCase());
    });
}

function setBackground(condition) {
  const body = document.body;

  if (condition.includes("clear")) {
    body.style.background = "linear-gradient(#ffe259, #ffa751)";
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(#bdc3c7, #2c3e50)";
  } else if (condition.includes("rain")) {
    body.style.background = "linear-gradient(#5f9ea0, #2e8b57)";
  } else if (condition.includes("snow")) {
    body.style.background = "linear-gradient(#e0eafc, #cfdef3)";
  } else {
    body.style.background = "linear-gradient(#8e9eab, #eef2f3)";
  }
}
