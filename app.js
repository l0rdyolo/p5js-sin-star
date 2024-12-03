let canvasProvider;
let grid;
let grid_cell_size = 10;
let grid_cell_offset = 35;

function setup() {
    // instances
    canvasProvider = new CanvasProvider();
    grid = new Grid(15, 15, grid_cell_offset);

    // Center the grid
    grid.center(canvasProvider.width, canvasProvider.height);

    // Create the grid
    grid.create();

    // p5.js setup
    createCanvas(canvasProvider.width, canvasProvider.height);
}

function draw() {
    background(71);
    grid.draw();
}
