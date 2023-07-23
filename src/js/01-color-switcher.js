const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector('body');

startBtn.addEventListener('click', heandlerStart);
stopBtn.addEventListener('click', heandlerStop);

stopBtn.disabled = true;
let time;


function heandlerStart(event) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    time = body.style.backgroundColor = getRandomHexColor();
    time = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
}, 1000)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function heandlerStop(event) {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(time);
}
