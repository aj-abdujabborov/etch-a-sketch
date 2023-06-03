const grid = document.querySelector(".grid");

gridSize = 16;
for (let i = 0; i < gridSize**2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${100/gridSize}%`;
    grid.appendChild(cell);
}