//get the sound element based on the charcode of the key
function keyHandler(e) {
  const kc = e.key.charCodeAt(0);

  const sound = document.querySelector(`audio[data-key='${kc}']`);

  if (!sound) return;

  const key = document.querySelector(`div[data-key='${kc}']`);

  key.classList.add('playing');

  sound.currentTime = 0;
  sound.play();
}

//remove the playing class after the transition ends
function transitionHandler(e) {
  if (e.propertyName !== 'transform') return;

  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.keys');
[...keys].forEach(key =>
  key.addEventListener('transitionend', transitionHandler)
);

window.addEventListener('keydown', keyHandler);
