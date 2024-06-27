const pageDropdown = document.getElementById('page-dropdown');
const calDiv = document.querySelector('.cal');
const slopeDiv = document.querySelector('.slope');

pageDropdown.addEventListener('change', () => {
  if (pageDropdown.value === 'cal') {
    slopeDiv.style.display = 'none';
    calDiv.style.display = 'block';
  } else {
    calDiv.style.display = 'none';
    slopeDiv.style.display = 'flex';
  }
});
//===============================================
function toggleMainDiv() {
  const mainDiv = document.querySelector('.main');
  const toggleButton = document.getElementById('toggle-button');

  toggleButton.addEventListener('click', () => {
    if (mainDiv.style.display === 'none') {
      mainDiv.style.display = 'block';
    } else {
      mainDiv.style.display = 'none';
    }
  });
}

toggleMainDiv();
//===============================================
//calculator
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttonc');
const copyButton = document.querySelectorAll('#copy-button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === ' ') {
      const currentValue = display.value;
      display.value = currentValue.slice(0, -1);
    } else if (button.textContent === 'C') {
      display.value = '';
    } else if (button.textContent === '=') {
      try {
        const result = eval(display.value);
        display.value = result; // Set the result to the display
        alert(`Total is: ${result}`); // Show the result in a window popup
      } catch (e) {
        display.value = 'Error';
      }
    } else {
      display.value += button.textContent;
    }
  });
});
  //=============================================
  //slope
  const x1Input = document.getElementById('x1');
const y1Input = document.getElementById('y1');
const x2Input = document.getElementById('x2');
const y2Input = document.getElementById('y2');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const resultElement = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

calculateButton.addEventListener('click', calculateSlope);
clearButton.addEventListener('click', clearValues);

function calculateSlope() {
  const x1 = parseFloat(x1Input.value);
  const y1 = parseFloat(y1Input.value);
  const x2 = parseFloat(x2Input.value);
  const y2 = parseFloat(y2Input.value);

  if (x1 === x2) {
    resultElement.textContent = 'Undefined';
  } else {
    const slope = (y2 - y1) / (x2 - x1);
    resultElement.textContent = `The slope is: ${slope.toFixed(2)}`;
  }
}

function clearValues() {
  x1Input.value = '0';
  y1Input.value = '0';
  x2Input.value = '0';
  y2Input.value = '0';
  resultElement.textContent = '';
}



//===============================================
const button = document.querySelector('.change-image');
const image = document.querySelector('#changeable-image');
let imageIndex = 0;
const images = ['hydraEmblem.webp', 'bronze.webp', 'silver.webp', 'gold.webp', 'diamond.webp'];

button.addEventListener('click', () => {
  imageIndex = (imageIndex + 1) % images.length;
  image.src = images[imageIndex];
});