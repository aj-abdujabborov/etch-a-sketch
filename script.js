const grid = document.querySelector(".grid");
const button = document.querySelector("button.new");
button.addEventListener("click", promptNewGrid);

const blackenAttribute = "data-blacken";
const blacken = .1;

makeGrid(16);

function promptNewGrid(e, msg = "New grid size: ") {
    const gridSize = +prompt(msg);
    if (isNaN(gridSize)) {
        promptNewGrid(e, "Size must be a number. ");
    }
    else if (gridSize < 1 || gridSize > 100) {
        promptNewGrid(e, "Size must be between 1 and 100. ");
    }
    else {
        clearGrid();
        makeGrid(gridSize);
    }
}

function color(e) {
    const currBlacken = +this.getAttribute(blackenAttribute);
    const newBlacken = Math.min(1, currBlacken + blacken);
    if (currBlacken === 1) return;
    this.setAttribute(blackenAttribute, newBlacken);

    const newRGB = randomRGB();
    this.style.backgroundColor = `${newRGB.slice(0,-1)},${1-newBlacken})`;
}

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const cell = document.createElement("div");
        
        cell.classList.add("cell");
        cell.style.width = `${100/gridSize}%`;
        cell.addEventListener("mouseover", color);
        cell.setAttribute(blackenAttribute, -blacken);
    
        grid.appendChild(cell);
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function randomRGB() {
    let out = "rgb(";
    for (let i = 0; i < 3; i++) {
        out += `${Math.floor(Math.random() * 256)},`;
    }
    out = out.slice(0, -1) + ")";
    return out;
}