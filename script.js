
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDetails = document.getElementById("weatherDetails");


searchBtn.addEventListener("click", fetchWeather);
cityInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        fetchWeather();
    }
});


async function fetchWeather() {
    const cityName = cityInput.value;

    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = '79c0218dad404c7abc5210458241710';
    const apiEndpoint = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    try {
        const response = await fetch(apiEndpoint);
        const weatherData = await response.json();

        
        const highTemp = weatherData.current.temp_c;
        const lowTemp = highTemp - 8; 

        
        weatherDetails.innerHTML = `
            <p>High Temperature: ${highTemp}°C</p>
            <p>Low Temperature: ${lowTemp}°C</p>
            
            <p>Wind Speed: ${weatherData.current.wind_kph} kph</p>
        `;
    } catch (error) {
        alert("Error retrieving weather data. Try again.");
        console.error("Error:", error);
    }
}
