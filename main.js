// We select the container that will have the grid and set a  starting grid of 16*16.
const container = document.querySelector(".inner-container");
let gridSize = 16;

// A function that returns a random rgb value.
function randomRGB (opacity) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Function to create a grid of divs based on the provided gridSize.
function createGrid(gridSize){
    container.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.style.border = "1px solid rgb(185, 185, 185)"
        gridDiv.style.width = `calc(100% / ${gridSize})`;
        gridDiv.style.height = `calc(100% / ${gridSize})`;    
        container.appendChild(gridDiv);

        // We change the background color each time our mouse hovers over a div making it possible to draw like an etch-a-sketch.
        // We have a opacity value, starting at 0, that gets 0.1 higher each time we hover over the same div up to 1.
        let opacity = 0;
        gridDiv.addEventListener("mouseenter", () => {
            opacity = Math.min(opacity + 0.1, 1);
            gridDiv.style.backgroundColor = randomRGB(opacity);    
        })
    }
}

// We call the function once to have the initial grid with a size of 16*16 by default.
createGrid(gridSize);

// We ask the user what grid size he wants once he clicks the button.
let gridSizeChanger = document.querySelector("button");
gridSizeChanger.addEventListener("click", () => {
    gridSize = prompt("Select the size of a grid based on the lines you want it to have (100 max)");
    while (gridSize > 100 || isNaN(gridSize) || gridSize === "") {
        gridSize = prompt("Please enter a valid size up to 100:");
    }
    createGrid(gridSize);
})
