const grid = document.querySelector(".grid");
const button = document.querySelector("button.new");
button.addEventListener("click", promptNewGrid);

makeGrid(16);

function promptNewGrid(e, msg = "New grid size: ") {
    const gridSize = +prompt(msg);
    if (isNaN(gridSize)) {
        promptNewGrid(e, "Size must be a number. ");
    }
    else if (gridSize < 1 || gridSize > 100) {
        promptNewGrid(e, "Maximum size is 100. ");
    }
    else {
        clearGrid();
        makeGrid(gridSize);
    }
}

function color(e) {
    this.classList.add("colored");
}

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const cell = document.createElement("div");
        
        cell.classList.add("cell");
        cell.style.width = `${100/gridSize}%`;
        cell.addEventListener("mouseover", color);
    
        grid.appendChild(cell);
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}
