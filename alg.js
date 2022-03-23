function addBox () {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.onmouseenter = function() {newBox.classList.add('hover');};
    const container = document.querySelector('.row:last-child');
    container.appendChild(newBox);
}

const board = document.querySelector('.board');

for (let i = 0; i < 16; i++) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    board.appendChild(newRow);
    for (let j = 0; j < 16; j++) {
        addBox();
    }
}

function reset() {
    const boxes = document.querySelectorAll('.hover');
    boxes.forEach(box => box.classList.remove('hover'));
}