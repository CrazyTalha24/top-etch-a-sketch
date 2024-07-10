const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

const getGridSize = () => {
    let gridSize = Number(prompt('Please enter grid dimensions: '));

    while (gridSize > 100 || isNaN(gridSize)) {
        gridSize = Number(prompt('Please enter grid dimensions less than 100: '));
    }

    return gridSize;
}

const createGrid = (gridSize) => {
    container.innerHTML = '';

    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (j = 0; j < gridSize; j++) {
            const widthAndHeight = 960 / gridSize;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');

            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            row.appendChild(gridBox);

            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = 'red';
            })
        }

        container.appendChild(row);
    }
};


resetBtn.addEventListener('click', () => {
    const newSize = getGridSize();
    createGrid(newSize);
});


const initialSize = getGridSize();
createGrid(initialSize);