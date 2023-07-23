import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const userInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const dayTimer = document.querySelector("[data-days]");
const hourTimer = document.querySelector("[data-hours]");
const minuteTimer = document.querySelector("[data-minutes]");
const secondTimer = document.querySelector("[data-seconds]");

startBtn.addEventListener('click', heandlerStart);
startBtn.disabled = true;
const currentDate = new Date();
let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userDate = selectedDates[0];
        if (currentDate > userDate) {
            window.alert("Please choose a date in the future")
        } else {
            startBtn.disabled = false;
        }

    console.log(selectedDates[0]);
  },
};

flatpickr(userInput, options);

function heandlerStart() {
    
    const id = setInterval(() => {
        const current = new Date();
        const timerTime = convertMs(userDate - current);
        if (timerTime.seconds >= 0) {
            dayTimer.textContent = timerTime.days.toString().padStart(2, "0");
            hourTimer.textContent = timerTime.hours.toString().padStart(2, "0");
            minuteTimer.textContent = timerTime.minutes.toString().padStart(2, "0");
            secondTimer.textContent = timerTime.seconds.toString().padStart(2, "0");
        } else {
            clearInterval(id);
        }
}, 1000)
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

