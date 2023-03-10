const gridContainer = document.getElementById('grid_container');
const sizeButton = document.getElementById('size_button');
const clearButton = document.getElementById('clear_button')
const cells = Array.from(document.querySelectorAll('#cell'));
let sizeInput;

sizeButton.addEventListener('click', () =>
    createGrid((getGridSize()))
);

clearButton.addEventListener('click', () =>
    clearCells()
);
function clearCells() {
    createGrid(Math.pow(sizeInput, 2))
    console.log('clicked');
}

function getGridSize() {
    sizeInput = prompt('How big do you want your canvas?(<100)', '');
    if (sizeInput > 100) {
        alert('Please Choose a Number Below 101');
        getGridSize();
    }
   return Math.pow(sizeInput, 2);
}
function createGrid(size) {
    gridContainer.innerHTML='';
    for (let i = 0; i < size; i++) {
        let newCell = document.createElement('div');
        newCell.setAttribute('class', 'cell');
        gridContainer.appendChild(newCell);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeInput}, 1fr)`;
}

