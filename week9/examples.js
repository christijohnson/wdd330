const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;
// or value in seconds of one day
document.cookie = 'name=Batman; max-age=86400'

// window-workers in a factorize function
function factorize(event) {
    // prevents the form from being submitted
    event.preventDefault();
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);

    if(window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;
        }, false);
    }
}

self.addEventListener('message', (event) => { 
    const facators = String(factorsOf(Number(event.data)));
    self.postMessage(factors);
    self.close();
}, false);

// canvas examples
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180,50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

context.fillStyle = '#0c0';
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);