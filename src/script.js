const pixelBoard = document.querySelector('#pixel-board');
const firstColor = document.querySelector('#first-color');
const clear = document.querySelector('#clear');
const colors = document.querySelectorAll('.color');
const size = document.querySelector('#board-size');
const showBtn = document.querySelector('#show-board');
const moreColor = document.querySelector('#more-color');
const sectionBoard = document.querySelector('.section-board');
let choiceColor;

let numberSize = 0;

size.addEventListener('input', (e) => {
  numberSize = e.target.value;
})

showBtn.addEventListener('click', () => {
  sectionBoard.style.display = 'flex';
  clear.style.display = 'block';
  if(pixelBoard.firstChild) {
    while(pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.childNodes[0])
    }    
  }
  gridPixels(numberSize);
});

function renderRandomColors() {  
  colors.forEach((color) => {
    let randomColorRed = Math.floor(Math.random() * 256);
    let randomColorGreen = Math.floor(Math.random() * 256);
    let randomColorBlue = Math.floor(Math.random() * 256);
    const validationColor = `rgb(${randomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;
    colors.forEach((c) => {
      if(c.style.backgroundColor === validationColor) {
        randomColorRed = Math.floor(Math.random() * 256);
        randomColorGreen = Math.floor(Math.random() * 256);
        randomColorBlue = Math.floor(Math.random() * 256);
        color.style.backgroundColor = `rgb(${randomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;
      }
    })
    color.style.backgroundColor = `rgb(${randomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;
  })
  choiceColor = firstColor.style.backgroundColor;
}

moreColor.addEventListener('click', () => {
  renderRandomColors()
})

renderRandomColors()

function selectColor() {
  colors.forEach((color) => {
    color.addEventListener('click', () => {
      choiceColor = color.style.backgroundColor
    })
  })
}
selectColor();

function paintPixels(pixels) {
  pixels.forEach((pixel) => {
    pixel.addEventListener('mousedown', () => {
      pixel.style.backgroundColor = choiceColor;
    })
  })
}

function clearGrid(pixels) {
  clear.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    })
  })
}

function gridPixels(gridSize) {
  for(let indexLine = 0; indexLine < gridSize; indexLine += 1) {
    let line = ''
    let column =  document.createElement('div');
    for(let indexColumn = 0; indexColumn < gridSize; indexColumn += 1) {
      line = document.createElement('div');
      line.classList.add('pixel');
      column.appendChild(line); 
    }    
    pixelBoard.appendChild(column);
  }
  const pixels = document.querySelectorAll('.pixel');
  paintPixels(pixels);
  clearGrid(pixels);
}
