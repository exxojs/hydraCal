const pageDropdown = document.getElementById('page-dropdown');
const calDiv = document.querySelector('.cal');
const slopeDiv = document.querySelector('.slope');
const mDiv = document.querySelector('.mmm');
const triDiv = document.querySelector('.triangle');

pageDropdown.addEventListener('change', () => {
  if (pageDropdown.value === 'cal') {
    slopeDiv.style.display = 'none';
    calDiv.style.display = 'block';
    mDiv.style.display = 'none';
    triDiv.style.display = 'none';
  } 
  else if (pageDropdown.value === 'M') {
    slopeDiv.style.display = 'none';
    calDiv.style.display = 'none';
    mDiv.style.display = 'flex';
    triDiv.style.display = 'none';
  } 
  else if (pageDropdown.value === 'Scalene') {
    slopeDiv.style.display = 'none';
    calDiv.style.display = 'none';
    mDiv.style.display = 'none';
    triDiv.style.display = 'flex';
  } 
  else {
    calDiv.style.display = 'none';
    slopeDiv.style.display = 'flex';
    mDiv.style.display = 'none';
    triDiv.style.display = 'none';
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
const numbersInput = document.getElementById('numbers');
const calcuButton = document.getElementById('calculateMMM');
const resultDiv = document.getElementById('resultMMM');
const resultContainer = document.getElementById('result-container');

calcuButton.addEventListener('click', (e) => {
  e.preventDefault(); // Add this line to prevent form submission
  calculateStats();
});

function calculateStats() {
  const numbersString = numbersInput.value;
  const numbersArray = numbersString.split(',').map(Number);

  if (numbersArray.some(isNaN)) {
    resultDiv.innerHTML = 'Invalid input. Please enter numbers only.';
    return;
  }

  const mean = calculateMean(numbersArray);
  const median = calculateMedian(numbersArray);
  const mode = calculateMode(numbersArray);

  const resultHTML = `
  <div class="result-container">
    <div class="result-item">
      <h4>Mean</h4>
      <p><span class="ellipsis"></span>${mean.toFixed(2)} is the dataset average</p>
    </div>
    <div class="result-item">
      <h4>Median</h4>
      <p><span class="ellipsis"></span>${median} is the middle number in an ascending order of the provided list</p>
    </div>
    <div class="result-item">
      <h4>Mode <br>(Most common number)</h4>
      <p><span class="ellipsis"></span>${mode}</p>
    </div>
  </div>
`;
  const resultElement = document.createElement('div');
  resultElement.innerHTML = resultHTML;
  resultContainer.appendChild(resultElement);
}

function calculateMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calculateMedian(arr) {
  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);
  return arr.length % 2 === 0? (arr[middleIndex - 1] + arr[middleIndex]) / 2 : arr[middleIndex];
}

function calculateMode(arr) {
  const frequencyMap = {};
  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });
  const maxFrequency = Math.max(...Object.values(frequencyMap));
  const modes = Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency);
  return modes.length === 1? modes[0] : 'There is no most commonly occurring number';
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
//===============================================
function calculateAngles() {
  const angleInput = document.getElementById("angle");
  const angleValue = parseInt(angleInput.value);

  if (angleValue < 1 || angleValue > 178) {
    alert("Invalid angle value. Please enter a value between 1 and 178.");
    return;
  }

  // Calculate remaining inner angles
  const angle1 = angleValue;
  const angle2 = Math.floor(Math.random() * (180 - angleValue - 1)) + 1;
  //Math.floor is for Math things in JavaScript and here it rounds the result of multiplication down to the
    //nearest integer using Math.floor() as a function

  //Math.random generates a random number 

  //The Math.random() * (180 - angleValue - 1) Multiplies the random number by the result of (180 - angleValue - 1). 
    //This scales the random number to a range that depends on the value of angleValue.

  //We added "+1" at the end to ensure that the second angle is atleast 1 degrees because 0 degrees does not make sense
  const angle3 = 180 - angle1 - angle2;

  // Calculate external angles
  const extAngle1 = 180 - angle1;
  const extAngle2 = 180 - angle2;
  const extAngle3 = 180 - angle3;

  // Display results
  document.getElementById("angle1").textContent = angle1 + "°";
  document.getElementById("angle2").textContent = angle2 + "°";
  document.getElementById("angle3").textContent = angle3 + "°";
  document.getElementById("ext-angle1").textContent = extAngle1 + "°";
  document.getElementById("ext-angle2").textContent = extAngle2 + "°";
  document.getElementById("ext-angle3").textContent = extAngle3 + "°";
}
