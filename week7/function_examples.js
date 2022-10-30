function sayHello(greeting='Hello') {
    return `${greeting}, my name is ${this.name}`;
}

sayHello.call(clark, 'How do you do');
// returned string is How do you do, my name is Clark

sayHello.call(bruce);
// returned strings is Hello, my name is Bruce


// Memoization or caching
function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x];
}

(function() {
    const name = 'Peter Parker';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}.  Today is ${today}`);
}) ();
// returned string is Welcome back Peter Parker.  Today is Tuesday

// Functions that define and rewrite themselves
function party() {
    console.log('Wow, this is amazing!');
    party = function() {
        console.log('Been there, got the T-shirt!');
    }
}

// first time called, returns Wow, this is amazing!
// every time after, reuturns Been there, got the T-shirt!

const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
// rolling 1 is a failure, everything else is success
promise.then(result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat!...
I rolled a ${result}`));

// promise instead of callback cluster
login(username)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch('throw error')

// closure
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}

//assign variable to return the value of outer function
const closure = outer();

// Ajax examples
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then(response => response.text())
    .then(text => outputDiv.innerText = text)
    .catch(error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(text => outputDiv.innerText = dat.value)
    .catch(error => console.log('There was an error:', error))
},false);

// sending information using json
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `https://jsonplaceholder.typicode.com/todos/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
        {
            method: 'POST',
            mode: 'cors',
            header: headers,
            body: JSON.stringify(task)
        }
        )

    fetch(request)
    .then(response => response.json())
    .then(task => console.log(`${data.title} saved with id of ${data.id}`))
    .catch(error => console.log('There was an error:', error))
}