function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const sound = document.querySelector(
    `audio[data-key='${e.key.charCodeAt(0)}']`
  );
  const key = document.querySelector(`div[data-key='${e.key.charCodeAt(0)}']`);

  if (!key) return;

  key.classList.add('playing');

  sound.currentTime = 0;
  sound.play();
}

const keys = document.querySelectorAll('.keys');
[...keys].forEach(key =>
  key.addEventListener('transitionend', removeTransition)
);

window.addEventListener('keydown', playSound);

//listen for a keypress
//find dom element that matches the key press
//add press styling
//find sound child
//play coresponding sound
