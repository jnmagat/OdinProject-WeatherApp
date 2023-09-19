const ctnr = document.querySelector('.container');

async function getCurrentWeather(searchVal){
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5cc1e4cbe464489bb6b81709231109&q='+searchVal);
        const data =  await response.json();
        displayWeatherDetails(data);
    } catch (error) {
        console.log(error);
    }
   
}

function displayWeatherDetails(data){
    let country = data.location.country;
    let name = data.location.name;
    let deg = data.current.temp_c;
    let wind = data.current.wind_mph;
    let hum = data.current.humidity;
    let icon = data.current.condition.icon;

    let card = document.createElement('div');
    card.className = "details";
    
    let getCard = document.querySelector('.details');
    if(getCard){
        ctnr.removeChild(getCard);
    }

    let title = document.createElement('h1');
    title.innerHTML = name + ", " + country;
    let degElement = document.createElement('h2');
    degElement.innerHTML = deg + "°C";
    let img = document.createElement('img');
    img.src =  icon;
    let windElement = document.createElement('p');
    windElement.innerHTML = "Wind: "+ wind;
    let humElement = document.createElement('p');
    humElement.innerHTML = "Humidity: "+ hum;

    ctnr.appendChild(card);
    card.append(title, degElement, img, windElement, humElement);

}

export {getCurrentWeather}