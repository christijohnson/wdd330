export function store() {
    window.localStorage.weather = list.innerHTML;
}
  
export function getValues() {
    var storedValues = window.localStorage.weather;
    if(!storedValues) {
                       
    } else {
      list.innerHTML = storedValues;
    }
}