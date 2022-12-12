import * as util from './utility.js';

const currentTemp = document.querySelector('#current-temp');
const currenthum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentFeelsLike = document.querySelector('#current-feels-like');
const currentWindSpeed = document.querySelector('#current-wind-speed');
const currentWindDir = document.querySelector('#current-wind-dir');
const weatherCards = document.querySelector(".cards");
const hourweatherCards = document.querySelector(".hourcards");

export async function apiFetch(apiURL) {
		try {
			const response = await fetch(apiURL);
			if (response.ok) {
				const data = await response.json();
				displayResults(data);
				console.log(data);
			} else {
					throw Error(await response.text());
			}
		} catch (error) {
				console.log(error);
		}
	}

	function  displayResults(weatherData) {
		weatherCards.innerHTML = '';
		const temp = weatherData.current.temp;
		const hum = weatherData.current.humidity;
		currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
		currenthum.innerHTML = `<strong>${hum}</strong>`;
		const iconsrc = `images/weather/${weatherData.current.weather[0].icon}.svg`;
		const iconsrcalt = `'https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png'`;
		const desc = weatherData.current.weather[0].description;
		const feels_like = weatherData.current.feels_like;
		const wind_speed = weatherData.current.wind_speed;
		const wind_direction = weatherData.current.wind_deg;
		const windCardinal = getCardinal(wind_direction);
		currentFeelsLike.innerHTML = feels_like;
		currentWindSpeed.innerHTML = wind_speed;
		currentWindDir.innerHTML = windCardinal + ' (' + wind_direction + '\xB0)';
		
		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute("onerror", 'this.src=' + iconsrcalt);
		weatherIcon.setAttribute('alt', desc);
		captionDesc.textContent = titleCase(desc);

		for (let i = 1; i < 7; i++) {
			let card = document.createElement("figure");
			let subcard = document.createElement("div");
			let dow = document.createElement("p");
			let picture = document.createElement("img");
			let forecastdescription = document.createElement("figcaption");
			let hiTemp = document.createElement("p");
			let loTemp = document.createElement("p");
	
			dow.innerHTML = `<strong>${util.dayOfWeek(i)}</strong>`;
			let weatherDescription = `${weatherData.daily[i].weather[0].description}`;
			forecastdescription.textContent = titleCase(weatherDescription);
			hiTemp.innerHTML = `High <strong>${weatherData.daily[i].temp.max.toFixed(0)}</strong> \xB0F`;
			loTemp.innerHTML = `Low <strong>${weatherData.daily[i].temp.min.toFixed(0)}</strong> \xB0F`;
			
			const iconsrc1 = `images/weather/${weatherData.daily[i].weather[0].icon}.svg`
			const iconsrc1alt = `'https://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}@2x.png'`;
				
			picture.setAttribute("src", iconsrc1);
			picture.setAttribute("onerror", 'this.src=' + iconsrc1alt);
			picture.setAttribute("alt", `Image of ${weatherData.daily[i].weather[0].description}`);
			picture.setAttribute("loading", "lazy");
			card.appendChild(dow);
			card.appendChild(picture);
			card.appendChild(forecastdescription);
			card.appendChild(hiTemp);
			card.appendChild(loTemp);
			subcard.appendChild(card);
			weatherCards.appendChild(subcard);
		}

			//hourly forecast
		for (let i = 0; i < 24; i++) {
			let hourcard = document.createElement("figure");
			let hoursubcard = document.createElement("div");
			let hour = document.createElement("p");
			let hourpicture = document.createElement("img");
			let hourforecastdescription = document.createElement("figcaption");
			let hourhiTemp = document.createElement("p");
			//let hourloTemp = document.createElement("p");
	
			let hour3 = weatherData.hourly[i].dt;
			let hour2 = new Date(hour3);
			hour.innerHTML = hour2;
			//hour.innerHTML = `<strong>${weatherData.hourly[i].dt}</strong>`;
			let hourweatherDescription = `${weatherData.hourly[i].weather[0].description}`;
			hourforecastdescription.textContent = titleCase(hourweatherDescription);
			hourhiTemp.innerHTML = `Temp <strong>${weatherData.hourly[i].temp.toFixed(0)}</strong> \xB0F`;
			//hourloTemp.innerHTML = `Low <strong>${weatherData.hourly[i].temp.min.toFixed(0)}</strong> \xB0F`;
			
			const houriconsrc1 = `images/weather/${weatherData.hourly[i].weather[0].icon}.svg`
			const houriconsrc1alt = `'http://openweathermap.org/img/wn/${weatherData.hourly[i].weather[0].icon}@2x.png'`;
				
			hourpicture.setAttribute("src", houriconsrc1);
			hourpicture.setAttribute("onerror", 'this.src=' + houriconsrc1alt);
			hourpicture.setAttribute("alt", `Image of ${weatherData.hourly[i].weather[0].description}`);
			hourpicture.setAttribute("loading", "lazy");
			hourcard.appendChild(hour);
			hourcard.appendChild(hourpicture);
			hourcard.appendChild(hourforecastdescription);
			hourcard.appendChild(hourhiTemp);
			//hourcard.appendChild(hourloTemp);
			hoursubcard.appendChild(hourcard);
			hourweatherCards.appendChild(hoursubcard);
		}
	}

// Title Case Conversion

	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}

function getCardinal(angle) {
	/* Given "0-360" returns the nearest cardinal direction.  Customize by changing the number of directions you have */
	const degreePerDirection = 360 / 16;
  
	/* Offset the angle by half of the degrees per direction Example: in 4 direction system North (320-45) becomes (0-90) */
	const offsetAngle = angle + degreePerDirection / 2;
  
	return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "N"
		: (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "NNE"
		: (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "NE"
		: (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "ENE"
		: (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "E"
		: (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "ESE"
		: (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "SE"
		: (offsetAngle >= 7 * degreePerDirection && offsetAngle < 8 * degreePerDirection) ? "SSE"
		: (offsetAngle >= 8 * degreePerDirection && offsetAngle < 9 * degreePerDirection) ? "S"
		: (offsetAngle >= 9 * degreePerDirection && offsetAngle < 10 * degreePerDirection) ? "SSW"
		: (offsetAngle >= 10 * degreePerDirection && offsetAngle < 11 * degreePerDirection) ? "SW"
		: (offsetAngle >= 11 * degreePerDirection && offsetAngle < 12 * degreePerDirection) ? "WSW"
		: (offsetAngle >= 12 * degreePerDirection && offsetAngle < 13 * degreePerDirection) ? "W"
		: (offsetAngle >= 13 * degreePerDirection && offsetAngle < 14 * degreePerDirection) ? "WNW"
		: (offsetAngle >= 14 * degreePerDirection && offsetAngle < 15 * degreePerDirection) ? "NW"
			: "NNW";
  }

  /*function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}*/
