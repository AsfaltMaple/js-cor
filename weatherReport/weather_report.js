function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '331d9ea807815c56aa74edbde1a706d7'; // Replace 'YOUR_API_KEY' with your actual API key - checked!
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    
    const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
}
)
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
};

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '331d9ea807815c56aa74edbde1a706d7'; // Replace 'YOUR_API_KEY' with your actual API key - checked!
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    
    const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
}
)
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
};


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}