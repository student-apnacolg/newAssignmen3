document.querySelector('.submitBtn').addEventListener('click', function() {
  const inputField = document.querySelector('#inputField');
  const inputValue = inputField.value.trim()
  document.querySelector('.greet').textContent = inputValue ? `Hello, ${inputValue}` : 'Hello';
  inputField.value = ''
});

document.addEventListener('DOMContentLoaded', () => {
  const boxColorMap = {
    box1: 'red',
    box2: 'blue',
    box3: 'green',
    box4: 'yellow',
  };

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    const targetColor = boxColorMap[box.id];
    // Toggle background color
    if (box.style.backgroundColor === targetColor) {
      box.style.backgroundColor = ''; // remove it
    } else {
      box.style.backgroundColor = targetColor;
    }
  });
  });
});