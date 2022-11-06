var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.strokeStyle = 'red';
context.fillStyle = 'blue';
// or use hexadecimal 'rgba(0, 0, 255, 0.5)'
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById('demo2');
    var context = canvas.getContext('2d');
    context.strokeStyle = 'red';

    var img = new Image();
    img.src = '../images/gb-bike.png';
    img.onload = function() {
        var pattern = context.createPattern(img, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}

function drawGradient() {
    var canvas = document.getElementById('demo3');
    var context = canvas.getContext('2d');
    context.strokeStyle = 'red';
    var gradient = context.createLinearGradient(0, 0, 0, 200);
}