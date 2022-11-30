export function toggleMode() {
    //toggle dark mode
    document.body.classList.toggle('dark-mode');    // toggles dark mode
    document.getElementById('toggle-mode').classList.toggle('toggle');  //toggles button text
}

export function toggleWeather() {
    //toggle weather display
    document.getElementById('current-weather').classList.toggle('hidden');  //toggles current weather
    document.getElementById('future-weather').classList.toggle('hidden');   // toggles 6 day forecast
    document.getElementById('toggle-weather').classList.toggle('toggle');   //toggles button text
}

export function dayOfWeek(offset = 0){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    d.setDate(d.getDate() + offset);
    let day = weekday[d.getDay()];
    return day;
}