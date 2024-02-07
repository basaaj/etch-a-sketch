const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const GRID_SIZE = 600;
let mode = 'black';

populateGrid(16);

reset.addEventListener('click', askSize);

blackButton.addEventListener('click', function() {
    mode = 'black';
});

rainbowButton.addEventListener('click', function() {
    mode = 'rainbow';
});

function askSize() {
    let newSize = prompt("Enter a new grid size less than 100");

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

    addColorChangeEvent();
}

function addColorChangeEvent() {
    let boxes = document.querySelectorAll('.grid-box');

    // Change box color upon hover
    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            // Assume current mode is 1 color
            let color = mode;

            // Randomize color if in rainbow mode
            if (mode === 'rainbow') {
                color = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
            }

            box.style.background = color;
        });
    });
}