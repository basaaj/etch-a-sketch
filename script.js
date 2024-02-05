const container = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    let currRow = document.createElement('grid-row');
    
    for (let j = 0; j < 16; j++) {
        let currBox = document.createElement('div');
        currBox.classList.add('grid-box');
    
        currRow.appendChild(currBox);
    }

    container.appendChild(currRow);
}

const boxes = document.querySelectorAll('.grid-box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        box.setAttribute('style', 'background: pink;');
    });
});

const reset = document.querySelector('button');

reset.addEventListener('click', askSize);

function askSize() {
    let newSize = prompt("Enter a new grid size", "Enter a number less than 100");

    if (newSize <= 0 || newSize > 100) {
        alert('Enter a number greater than 0 and less than 100!');
        askSize();
    }
}
   