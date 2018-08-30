// get our components
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

console.log(skipButtons);
// build our functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// add event listners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
Array.from(skipButtons).forEach(btn => btn.addEventListener('click', skip));
Array.from(ranges).forEach(range => range.addEventListener('change', handleRangeUpdate));
Array.from(ranges).forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => {
  mouseDown = true;
});
progressBar.addEventListener('mouseup', () => {
  mouseDown = false;
});
