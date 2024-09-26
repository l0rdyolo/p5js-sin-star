let canvasProvider;
let grid;
let grid_cell_size  = 6;
let grid_cell_offset = 40;
function setup() {
  // instances
  canvasProvider = new CanvasProvider();
  grid = new Grid(10, 10 , grid_cell_offset );
  grid.create();
  // p5.js setup
  createCanvas(canvasProvider.width, canvasProvider.height);
}

function draw() {
  background(71);
  grid.draw(); 
}
