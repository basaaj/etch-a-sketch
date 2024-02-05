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
   