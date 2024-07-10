const container = document.querySelector('.container');
const amtOfGrids = 16;


const grid = (amtOfGrids) => {
    for (i=0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (j=0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / amtOfGrids;
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
    
}



grid(amtOfGrids);