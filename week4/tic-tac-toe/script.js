const playfield = document.querySelector('.playfield');
let player = 'X';

function nextplayer(event) {
    event.target.innerHTML = player;
    if (player === 'X') player = 'O';
    else player = 'X';
}

document.querySelector('button').onclick = ()=>{location.reload()};