const board = document.querySelector('.board');

function addBox () {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.onmouseenter = function() {newBox.classList.add('hover');};
    const container = document.querySelector('.row:last-child');
    container.appendChild(newBox);
}

function initialize(x, y) {
    for (let i = 0; i < y; i++) {
        const newRow = document.createElement('div');
        newRow.className = 'row';
        board.appendChild(newRow);
        for (let j = 0; j < x; j++) {
            addBox();
        }
    }
}

function reset() {
    const boxes = document.querySelectorAll('.hover');
    boxes.forEach(box => box.classList.remove('hover'));
}

initialize(16, 16);