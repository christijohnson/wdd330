export function store() {
    window.localStorage.myitems = list.innerHTML;
}
  
export function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
                       
    } else {
      list.innerHTML = storedValues;
    }
}