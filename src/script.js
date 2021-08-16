const pixelBoard = document.querySelector('#pixel-board');
const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');
const thirdColor = document.querySelector('#third-color');
const fourthColor = document.querySelector('#fourth-color');
const clear = document.querySelector('#clear');
const colors = document.querySelectorAll('.color');
firstColor.style.backgroundColor = `rgb(0, 0, 0)`;
secondColor.style.backgroundColor = `rgb(255, 0, 0)`;
thirdColor.style.backgroundColor = `rgb(0, 255, 0)`;
fourthColor.style.backgroundColor = `rgb(0, 0, 255)`;
let choiceColor = firstColor.style.backgroundColor;

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



