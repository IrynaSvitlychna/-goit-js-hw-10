//  Описаний у документації
import izitoast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import vector from "../img/Vector.svg";
import xOctagon from "../img/bi_x-octagon.svg";

createForm.addEventListener('submit', event => {
    event.preventDefault();
    const delay = event.currentTarget.elements.delay.value;
    const radioChecked = document.querySelector('input[name="state"]:checked');
  
     
    const promise = new Promise((resolve, reject) => {
      if (radioChecked.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    });
  
    
    promise
      .then(delay => {
        setTimeout(() => {
          iziToast.success({
            title: 'OK',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            iconUrl: `${vector}`,
            backgroundColor: '#59A10D',
            titleColor: '#fff',
            messageColor: '#fff',
            messageSize: '16px',
            progressBarColor: '#B5EA7C',
          });
        }, delay);
      })
      .catch(delay => {
        setTimeout(() => {
          iziToast.error({
            title: 'Error',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            iconUrl: `${xOctagon}`,
            backgroundColor: '#EF4040',
            titleColor: '#fff',
            messageColor: '#fff',
            messageSize: '16px',
            progressBarColor: '#FFBEBE',
          });
        }, delay);
      });
    createForm.reset();
  });