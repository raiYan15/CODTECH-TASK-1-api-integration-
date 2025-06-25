async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();

    if (data.main) {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>☁ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        
        
      `;
 
    } else {
      resultDiv.innerHTML = "City not found.";
    }
  } catch (err) {
    resultDiv.innerHTML = "Error fetching data.";
  }
}
