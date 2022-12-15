const myGreeting = () => {
  const content = document.querySelector('.main-container');
  const loader = document.querySelector('.loader');
  content.classList.remove('main-container');
  loader.classList.add('main-container');
  loader.classList.remove('loader');
}

console.log('Loading');

const myTimeout = setTimeout(myGreeting, 4900);


const showPercentage = () => {
  const percentageDisplay = document.querySelector("#percentage");

  let width = 0;
  const percentage = () => {
    const interval = setInterval(function () {
        if (width === 100) {
            clearInterval(interval);
        } else {
            width++;
            percentageDisplay.innerHTML = `${width}%`
        }
    }, 35);
  }
  percentage();
};
showPercentage()