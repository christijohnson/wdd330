export function toggleMode() {
    //toggle dark mode
    document.body.classList.toggle('dark-mode');    // toggles dark mode
    document.getElementById('toggle-mode').classList.toggle('toggle');  //toggles button text
}

export function toggleWeather() {
    document.getElementById('current-weather').classList.toggle('hidden');  //toggles current weather
    document.getElementById('future-weather').classList.toggle('hidden');   // toggles 6 day forecast
    document.getElementById('toggle-weather').classList.toggle('toggle');   //toggles button text
}

const dayofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
// get weekday for forecast cards
export function dayOfWeek(offset = 0){
    const d = new Date();
    d.setDate(d.getDate() + offset);
    let day = dayofweek[d.getDay()];
    return day;
}

export function timestamp(){
    const currentdate = new Date();
    const day = currentdate.getDate();
    const ordinal = dateOrdinal(day);
    const monthname = months[currentdate.getMonth()];
    const weekday = dayofweek[currentdate.getDay()];
    const minutes = pad(currentdate.getMinutes());
    const hours = currentdate.getHours();
    let hoursAdj = 0;
    let ampm = 'pm';
    if (hours >= 12){
        hoursAdj = hours-12
    } else if (hours === 0){
        hoursAdj = hours+12
    } else {
        hoursAdj = hours
        ampm = 'am'
    }
    document.querySelector('#weather-updated').innerHTML = `Weather last updated: ${weekday}, ${monthname} ${day}<sup>${ordinal}</sup> ${hoursAdj}:${minutes} ${ampm}`;
}

function dateOrdinal(d) {
    return (31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
};

function pad(n, width=2, z=0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }