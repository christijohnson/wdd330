import { timestamp } from './utility.js';
import * as weather from './weather.js';

const currentlocation = document.querySelector('#selectedLocation');

export async function apiZipFetch(apiURL) {
	try {
		const response = await fetch(apiURL);
		if (response.ok) {
			const data = await response.json();
			displayResults(data);
			timestamp();
		} else {
				throw Error(await response.text());
		}
	} catch (error) {
			console.log(error);
	}
}

function  displayResults(zipData) {
	const lat = zipData.lat;
	const lon = zipData.lon;
	const location = 'https://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon + '&limit=5&appid=7bcb523faeae2a7693622e17ed4cfcf2'
	locationFetch(location);
	const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely&units=imperial&appid=7bcb523faeae2a7693622e17ed4cfcf2';
	weather.apiFetch(url);
}

async function locationFetch(apiURL) {
	try {
		const response = await fetch(apiURL);
		if (response.ok) {
			const data = await response.json();
			currentlocation.innerHTML = `${data[0].name}, ${data[0].state}`;
		} else {
				throw Error(await response.text());
		}
	} catch (error) {
			console.log(error);
	}
}

/*function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}*/
