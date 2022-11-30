import * as weather from './weather.js';

const currentlocation = document.querySelector('#selectedLocation');

export async function apiZipFetch(apiURL) {
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

function  displayResults(zipData) {
	const locname = zipData.name;
	const lat = zipData.lat;
	const lon = zipData.lon;
	currentlocation.innerHTML = `${locname}`;
	const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly&units=imperial&appid=7bcb523faeae2a7693622e17ed4cfcf2';
	weather.apiFetch(url);
}
function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}