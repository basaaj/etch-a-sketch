const grid = document.querySelector(".grid");
const GRID_SIZE = 500;

populateGrid(16);

const reset = document.querySelector('button');

reset.addEventListener('click', askSize);

function askSize() {
    let newSize = prompt("Enter a new grid size", "Enter a number less than 100");

    if (newSize <= 0 || newSize > 100) {
        alert('Enter a number greater than 0 and less than 100!');
        askSize();
    }

    else {
        populateGrid(newSize);
    }
}

function populateGrid(size) {
    // Reset grid
    grid.innerHTML = null;

    // Calculate new size
    let boxSize = GRID_SIZE / size;

    // Populate grid boxes
    for (let i = 0; i < size; i++) {
        let currRow = document.createElement('grid-row');
        
        for (let j = 0; j < size; j++) {
            let currBox = document.createElement('div');
            currBox.classList.add('grid-box');
            currBox.style.height = boxSize + 'px';
            currBox.style.width = boxSize + 'px';
        
            currRow.appendChild(currBox);
        }
    
        grid.appendChild(currRow);
    }

    // Add event listeners to boxes
    let boxes = document.querySelectorAll('.grid-box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            box.style.background = 'pink';
        });
    });
}