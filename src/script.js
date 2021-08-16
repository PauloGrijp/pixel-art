const pixelBoard = document.querySelector('#pixel-board');


function createGrid(gridSize) {
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
} 

createGrid(5);

