const elBg = document.querySelector(".bg");
const elLoadText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  if (load >= 99) {
    clearInterval(int);
  }
  load++;

  elLoadText.innerHTML = `${load}%`;
  elLoadText.getElementsByClassName.opacity = scale(load, 0, 100, 1, 0);
  elBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
