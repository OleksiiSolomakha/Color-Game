const color = document.querySelectorAll('.color');
const header = document.querySelector('header');
const guessColor = document.querySelector('#head-color');
const message = document.querySelector('#message');

let colors = generateRandomColor(6);

let currentColor = randomColor();
guessColor.textContent = currentColor;

for (let i = 0; i < color.length; i++) {
  color[i].style.backgroundColor = colors[i];

  color[i].addEventListener('click', function() {
    let pickedColor = this.style.backgroundColor;
    if (pickedColor === currentColor){
      winColor(pickedColor);
      message.textContent = 'You Won!)';      
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = 'Try again(';      
    }
  });
};

function winColor(wincol) {
  for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = wincol;
    header.style.backgroundColor = wincol;    
  }
};

function randomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(createRandomColor());
  }
  return arr;
}

function createRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}