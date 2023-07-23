const submitBtn = document.querySelector("form");
const firstDelay = document.querySelector("input[name='delay']");
const stepDelay = document.querySelector("input[name='step']");
const amountInput = document.querySelector("input[name='amount']");

function createPromise(position, delay) {
  
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
      res({ position, delay });
    } else {
      rej({ position, delay });
    }
  }, delay);
    })
}

submitBtn.addEventListener('submit', heandlerSubmit);

function heandlerSubmit(evt) {
  evt.preventDefault();
  let inputDelay = Number(firstDelay.value);
  let step = Number(stepDelay.value);
  let amount = Number(amountInput.value);

  for (let i = 0; i < amount; i += 1) {

    const position = i + 1;
    const delay = inputDelay + i * step;

      createPromise(position, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
  }
}

