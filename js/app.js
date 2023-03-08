const allSteps = document.querySelectorAll('.step');
const stepNumbers = document.querySelectorAll('.step-no');
const nextStep = document.querySelector('.next-step');
const thanks = document.querySelector('.thanks');
const goBack = document.querySelector('.go-back');
const checkBox = document.querySelector('.switch');
const offer = document.querySelectorAll('.card2-offer');
const arcadePriceEl = document.querySelector('.arcade-price');
const advancedPriceEl = document.querySelector('.advanced-price');
const proPriceEl = document.querySelector('.pro-price');
checkBox.addEventListener('click', () => {
  document.querySelector('.switch div').classList.toggle('left');

  offer.forEach((of) => {
    of.classList.toggle('hidden');
  });
  if (document.querySelector('.switch div').classList.contains('left')) {
    advancedPriceEl.textContent = '$9/month';
  } else if (
    !document.querySelector('.switch div').classList.contains('left')
  ) {
    advancedPriceEl.textContent = '$9/month';
  }
});

let activeNumber = function () {
  for (let i = 0; i < allSteps.length; i++) {
    if (allSteps[i].classList.contains('show')) {
      stepNumbers[i].classList.add('active');
    } else {
      stepNumbers[i].classList.remove('active');
    }
  }
};

nextStep.addEventListener('click', () => {
  if (allSteps[allSteps.length - 1].classList.contains('show')) {
    allSteps[allSteps.length - 1].classList.remove('show');
    thanks.classList.add('show');
    nextStep.style.display = 'none';
    goBack.classList.remove('show');
  } else if (allSteps[allSteps.length - 2].classList.contains('show')) {
    nextStep.classList.add('confirm');
    nextStep.textContent = 'Confirm';
  } else {
    nextStep.textContent = 'Next Step';
    nextStep.classList.remove('confirm');
  }

  for (let i = 0; i < allSteps.length; i++) {
    if (allSteps[i].classList.contains('show')) {
      allSteps[i].classList.remove('show');
      allSteps[i].nextElementSibling.classList.add('show');
      goBack.classList.add('show');
      activeNumber();
      return;
    }
  }
});
goBack.addEventListener('click', () => {
  if (allSteps[1].classList.contains('show')) {
    goBack.classList.remove('show');
  }
  for (let i = 0; i < allSteps.length; i++) {
    if (allSteps[i].classList.contains('show')) {
      allSteps[i].classList.remove('show');
      allSteps[i].previousElementSibling.classList.add('show');
      nextStep.textContent = 'Next Step';
      nextStep.classList.remove('confirm');

      activeNumber();
      return;
    }
  }
});
