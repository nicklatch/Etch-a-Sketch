const gridContainer = document.getElementById('grid_container');
const button = document.getElementById('start_button');
let sizeInput;

button.addEventListener('click', () =>
    createGrid((getGridSize()))
);

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

