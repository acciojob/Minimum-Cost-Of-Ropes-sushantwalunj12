//your code here
const form = document.querySelector('#input-form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  

  const inputValues = event.target.elements.ropes.value
    .split(',')
    .map(val => parseInt(val.trim()));


  inputValues.sort((a, b) => a - b);


  let totalCost = 0;
  let lastIndex = inputValues.length - 1;

  while (lastIndex > 0) {
    const cost = inputValues[lastIndex] + inputValues[lastIndex - 1];
    totalCost += cost;
    inputValues.splice(lastIndex - 1, 2, cost);

    lastIndex--;
  }

  resultDiv.textContent = `Minimum cost of ropes: ${totalCost}`;
});

