 const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops function from running
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.classList.add('playing');
    key.classList.add('moving');
    
}


function removetransition (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    this.classList.remove('moving');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removetransition));

window.addEventListener('keydown', playSound);
