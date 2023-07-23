import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const userInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
//const value = document.querySelector(".value");
const dayTimer = document.querySelector("[data-days]");
const hourTimer = document.querySelector("[data-hours]");
const minuteTimer = document.querySelector("[data-minutes]");
const secondTimer = document.querySelector("[data-seconds]");

startBtn.addEventListener('click', heandlerStart);
//console.log(userInput);
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
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); 
// console.log(convertMs(140000)); 
// console.log(convertMs(24140000)); 

//console.log(flatpickr);