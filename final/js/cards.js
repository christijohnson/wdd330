import * as util from './utility.js';
// jshint esversion:6

/*const cards = document.querySelector(".cards");

export function displayforecast(weatherData) {
    for (let i = 1; i < 7; i++) {
        let card = document.createElement("figure");
        let subcard = document.createElement("div");
        let dow = document.createElement("p");
        let picture = document.createElement("img");
        let forecastdescription = document.createElement("figcaption");
        let hiTemp = document.createElement("p");
        let loTemp = document.createElement("p");

        dow.textContent = util.dayOfWeek(i);
        forecastdescription.textContent = `${weatherData.daily[i].weather[0].description}`;
        hiTemp.innerHTML = `High <strong>${weatherData.daily[i].temp.max.toFixed(0)}</strong> \xB0 F`;
        loTemp.innerHTML = `Low <strong>${weatherData.daily[i].temp.min.toFixed(0)}</strong> \xB0 F`;
        
        const iconsrc1 = `images/weather/${weatherData.daily[i].weather[0].icon}.svg`;
        picture.setAttribute("src", iconsrc1);
        picture.setAttribute("alt", `Image of ${weatherData.daily[i].weather[0].description}`);
        picture.setAttribute("loading", "lazy");
        card.appendChild(dow);
        card.appendChild(picture);
        card.appendChild(forecastdescription);
        card.appendChild(hiTemp);
        card.appendChild(loTemp);

        subcard.appendChild(card);
        cards.appendChild(subcard);
    }
}*/