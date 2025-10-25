function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculateAndDisplay(fn) {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = fn(a, b);
}

['add', 'subtract', 'multiply'].forEach(op => {
  document.getElementById(`btn-${op}`)
    .addEventListener('click', () => calculateAndDisplay(window[op]));
});
