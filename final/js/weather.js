import * as util from './utility.js';

const weekDay1 = document.querySelector('#day1');
const weekDay2 = document.querySelector('#day2');
const weekDay3 = document.querySelector('#day3');
const weekDay4 = document.querySelector('#day4');
const weekDay5 = document.querySelector('#day5');
const weekDay6 = document.querySelector('#day6');
const currentTemp = document.querySelector('#current-temp');
const currenthum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentFeelsLike = document.querySelector('#current-feels-like');
const currentWindSpeed = document.querySelector('#current-wind-speed');
const currentWindDir = document.querySelector('#current-wind-dir');
const day1TempMin = document.querySelector('#day1-temp-min');
const day1TempMax = document.querySelector('#day1-temp-max');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#figcaption1');
const day2TempMin = document.querySelector('#day2-temp-min');
const day2TempMax = document.querySelector('#day2-temp-max');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#figcaption2');
const day3TempMin = document.querySelector('#day3-temp-min');
const day3TempMax = document.querySelector('#day3-temp-max');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#figcaption3');
const day4TempMin = document.querySelector('#day4-temp-min');
const day4TempMax = document.querySelector('#day4-temp-max');
const weatherIcon4 = document.querySelector('#weather-icon4');
const captionDesc4 = document.querySelector('#figcaption4');
const day5TempMin = document.querySelector('#day5-temp-min');
const day5TempMax = document.querySelector('#day5-temp-max');
const weatherIcon5 = document.querySelector('#weather-icon5');
const captionDesc5 = document.querySelector('#figcaption5');
const day6TempMin = document.querySelector('#day6-temp-min');
const day6TempMax = document.querySelector('#day6-temp-max');
const weatherIcon6 = document.querySelector('#weather-icon6');
const captionDesc6 = document.querySelector('#figcaption6');
const weatheralert = document.querySelector('#alert-weather');

export async function apiFetch(apiURL) {
		try {
			const response = await fetch(apiURL);
			if (response.ok) {
				const data = await response.json();
				displayResults(data);
			} else {
					throw Error(await response.text());
			}
		} catch (error) {
				console.log(error);
		}
	}

	function  displayResults(weatherData) {
		const temp = weatherData.current.temp;
		const hum = weatherData.current.humidity;
		currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
		currenthum.innerHTML = `<strong>${hum}</strong>`;
		const iconsrc = `images/weather/${weatherData.current.weather[0].icon}.svg`;
		const desc = weatherData.current.weather[0].description;
		const feels_like = weatherData.current.feels_like;
		const wind_speed = weatherData.current.wind_speed;
		const wind_direction = weatherData.current.wind_deg;
		const windCardinal = getCardinal(wind_direction);
		currentFeelsLike.innerHTML = feels_like;
		currentWindSpeed.innerHTML = wind_speed;
		currentWindDir.innerHTML = windCardinal + ' (' + wind_direction + '\xB0)';
		
		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute('alt', desc);
		captionDesc.textContent = titleCase(desc);
		
		const dayofweek1 = util.dayOfWeek(1);
		const dayofweek2 = util.dayOfWeek(2);
		const dayofweek3 = util.dayOfWeek(3);
		const dayofweek4 = util.dayOfWeek(4);
		const dayofweek5 = util.dayOfWeek(5);
		const dayofweek6 = util.dayOfWeek(6);

		weekDay1.innerHTML = dayofweek1;
		weekDay2.innerHTML = dayofweek2;
		weekDay3.innerHTML = dayofweek3;
		weekDay4.innerHTML = dayofweek4;
		weekDay5.innerHTML = dayofweek5;
		weekDay6.innerHTML = dayofweek6;
		
		const tempday1min = weatherData.daily[1].temp.min;
		const tempday1max = weatherData.daily[1].temp.max;
		const tempday2min = weatherData.daily[2].temp.min;
		const tempday2max = weatherData.daily[2].temp.max;
		const tempday3min = weatherData.daily[3].temp.min;
		const tempday3max = weatherData.daily[3].temp.max;
		const tempday4min = weatherData.daily[4].temp.min;
		const tempday4max = weatherData.daily[4].temp.max;
		const tempday5min = weatherData.daily[5].temp.min;
		const tempday5max = weatherData.daily[5].temp.max;
		const tempday6min = weatherData.daily[6].temp.min;
		const tempday6max = weatherData.daily[6].temp.max;
		const desc1 = weatherData.daily[1].weather[0].description;
		const desc2 = weatherData.daily[2].weather[0].description;
		const desc3 = weatherData.daily[3].weather[0].description;
		const desc4 = weatherData.daily[4].weather[0].description;
		const desc5 = weatherData.daily[5].weather[0].description;
		const desc6 = weatherData.daily[6].weather[0].description;
		
		day1TempMin.innerHTML = `<strong>${tempday1min.toFixed(0)}</strong>`;
		day1TempMax.innerHTML = `<strong>${tempday1max.toFixed(0)}</strong>`;
		day2TempMin.innerHTML = `<strong>${tempday2min.toFixed(0)}</strong>`;
		day2TempMax.innerHTML = `<strong>${tempday2max.toFixed(0)}</strong>`;
		day3TempMin.innerHTML = `<strong>${tempday3min.toFixed(0)}</strong>`;
		day3TempMax.innerHTML = `<strong>${tempday3max.toFixed(0)}</strong>`;
		day4TempMin.innerHTML = `<strong>${tempday4min.toFixed(0)}</strong>`;
		day4TempMax.innerHTML = `<strong>${tempday4max.toFixed(0)}</strong>`;
		day5TempMin.innerHTML = `<strong>${tempday5min.toFixed(0)}</strong>`;
		day5TempMax.innerHTML = `<strong>${tempday5max.toFixed(0)}</strong>`;
		day6TempMin.innerHTML = `<strong>${tempday6min.toFixed(0)}</strong>`;
		day6TempMax.innerHTML = `<strong>${tempday6max.toFixed(0)}</strong>`;
		
		const iconsrc1 = `images/weather/${weatherData.daily[1].weather[0].icon}.svg`;
		weatherIcon1.setAttribute('src', iconsrc1);
		weatherIcon1.setAttribute('alt', desc1);
		captionDesc1.textContent = titleCase(desc1);

		const iconsrc2 = `images/weather/${weatherData.daily[2].weather[0].icon}.svg`;
		weatherIcon2.setAttribute('src', iconsrc2);
		weatherIcon2.setAttribute('alt', desc2);
		captionDesc2.textContent = titleCase(desc2);

		const iconsrc3 = `images/weather/${weatherData.daily[3].weather[0].icon}.svg`;
		weatherIcon3.setAttribute('src', iconsrc3);
		weatherIcon3.setAttribute('alt', desc3);
		captionDesc3.textContent = titleCase(desc3);

		const iconsrc4 = `images/weather/${weatherData.daily[4].weather[0].icon}.svg`;
		weatherIcon4.setAttribute('src', iconsrc4);
		weatherIcon4.setAttribute('alt', desc4);
		captionDesc4.textContent = titleCase(desc4);

		const iconsrc5 = `images/weather/${weatherData.daily[5].weather[0].icon}.svg`;
		weatherIcon5.setAttribute('src', iconsrc5);
		weatherIcon5.setAttribute('alt', desc5);
		captionDesc5.textContent = titleCase(desc5);

		const iconsrc6 = `images/weather/${weatherData.daily[3].weather[0].icon}.svg`;
		weatherIcon6.setAttribute('src', iconsrc6);
		weatherIcon6.setAttribute('alt', desc6);
		captionDesc6.textContent = titleCase(desc6);
	}

// Title Case Conversion

	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}

	/** 
 * Given "0-360" returns the nearest cardinal direction
 */
function getCardinal(angle) {
	/** 
	 * Customize by changing the number of directions you have
	 */
	const degreePerDirection = 360 / 16;
  
	/** 
	 * Offset the angle by half of the degrees per direction
	 * Example: in 4 direction system North (320-45) becomes (0-90)
	 */
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