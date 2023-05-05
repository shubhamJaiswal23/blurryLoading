const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  loadingText.textContent = `${load}%`;
  bg.style.filter = `blur(${100 - load}px)`;
  loadingText.style.opacity = `${(100 - load) / 100}`;
  if (load === 100) {
    clearInterval(int);
    // loadingText.textContent = '';
  }
}
