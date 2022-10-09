const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search() {
    alert('Form Submitted');
}

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.addEventListener('focus', function() {
    if (input.value==='Search Here') {
        input.value = ''
    }
}, false);

input.addEventListener('blur', function() {
    if(input.value==='') {
        input.value = 'Search Here';
    }
}, false);

// create empty object, name property on input field, convert object to JSON
const hero = {};
hero.name = form.heroName.value;
alert(JSON.stringify(hero));

// for loop to check values of checkbox
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

// or use array iterators using spread operator
// hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

hero.age = form.age.value;
form.city;
hero.city=form.city.value;
form.origin = form.origin.value;

form.addEventListener('submit', validate, false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

// for immediate feedback, add the event listener to the input field
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

const Dice = function(sides=6) {
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

// create an instance using new operator
const redDice = new Dice();
// parentheses aren't required unless arguments need to be provided

// getters and setters
me.age = 50;
me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if(this.age > this.retirementAge) {return 0;}
        else {return this.retirementAge - this.age;}
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});