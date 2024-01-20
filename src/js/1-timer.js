// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import xOctagon from "../img/bi_x-octagon.svg";

let elements = document.getElementsByClassName('label');

for (var i = 0; i < elements.length; i++) {
  elements[i].textContent = elements[i].textContent.toUpperCase();
}


const startBtn = document.querySelector('[data-start]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
  },
  onOpen: function daysNames() {
    document.querySelectorAll('.flatpickr-weekday').forEach(el => {
      el.textContent = el.textContent.trim().slice(0, 2);
    });
  },
  onClose: function (selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0].getTime();
    if (userSelectedDate >= Date.now()) {
      startBtn.removeAttribute('disabled');
      startBtn.classList.add('button-enabled');
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        iconUrl: `${xOctagon}`,
        backgroundColor: '#EF4040',
        titleColor: '#fff',
        messageColor: '#fff',
        messageSize: '16px',
        progressBarColor: '#B51B1B',
      });
      startBtn.setAttribute('disabled', true);
      startBtn.classList.remove('button-enabled');
    }
  },
};

const dateTimeInput = flatpickr('#datetime-picker', options);


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
  

   startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', true);
    startBtn.classList.remove('button-enabled');
       
    setInterval (() => {
      const currentTime = Date.now();
      const difference = userSelectedDate - currentTime;
      const time = convertMs(difference);
      const { days, hours, minutes, seconds } = time;

    if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0) {
      document.querySelector('[data-days').textContent = days
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-hours]').textContent = hours
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-minutes]').textContent = minutes
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-seconds]').textContent = seconds
        .toString()
        .padStart(2, '0');
    }
  }, 1000);
});
      