const color = document.querySelectorAll('.color');
const header = document.querySelector('header');
const guessColor = document.querySelector('#head-color');
const message = document.querySelector('#message');
const modeBtn = document.querySelectorAll('.mode');
const resetBtn = document.querySelector('#reset');
let colors = [];
let gameMode = 6;
let currentColor;

init();

function init() {
  modeBtnEvents();
  colorPaletteEvents();
  reset();
};

resetBtn.addEventListener('click', function () {
  reset();
});

function modeBtnEvents() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
      modeBtn[0].classList.remove('select');
      modeBtn[1].classList.remove('select');
      this.classList.add('select');
      this.textContent === 'Easy' ? gameMode = 3 : gameMode = 6;
      reset();
    });
  };
};

function colorPaletteEvents() {
  for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function () {
      let pickedColor = this.style.backgroundColor;
      if (pickedColor === currentColor) {
        winColor(pickedColor);
        message.textContent = 'You Won!)';
        resetBtn.textContent = 'Play again';
      } else {
        this.style.backgroundColor = '#232323';
        message.textContent = 'Try again(';
      };
    });
  };
};

function reset() {
  colors = generateRandomColor(gameMode);
  currentColor = randomColor();
  message.textContent = '';
  resetBtn.textContent = 'New colors';
  guessColor.textContent = currentColor;
  for (let i = 0; i < color.length; i++) {
    if (colors[i]) {
      color[i].style.display = 'block';
      color[i].style.backgroundColor = colors[i];
    } else {
      color[i].style.display = 'none';
    };
  };
  header.style.backgroundColor = '#232323';
};

function winColor(wincol) {
  for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = wincol;
    header.style.backgroundColor = wincol;
  };
};

function randomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(createRandomColor());
  }
  return arr;
};

function createRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};