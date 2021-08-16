const pixelBoard = document.querySelector('#pixel-board');
const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');
const thirdColor = document.querySelector('#third-color');
const fourthColor = document.querySelector('#fourth-color');
const clear = document.querySelector('#clear');
const colors = document.querySelectorAll('.color');
let choiceColor = firstColor.style.backgroundColor;

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
}

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
    pixel.addEventListener('click', () => {
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

gridPixels(5);



