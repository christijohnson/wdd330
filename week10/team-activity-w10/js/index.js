import QuakesController from "./quakesController.js";

var qCtrl = new QuakesController('#quakeList');
//const radiusInput = parseInt(document.getElementById("radiussize").value);
qCtrl.init();

// Get the input field
var input = document.getElementById("radiussize");


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitRadius").click();
  }
});

//document.getElementById('submitRadius').onclick = console.log('you clicked me');  //qCtrl.init();


document.getElementById("submitRadius").onclick = function() {myFunction()};

function myFunction() {
    qCtrl.init();
}
