let canvas;
let grid;
let grid_cell_size  = 6;
let grid_cell_offset = 40;
function setup() {
  // instances
  canvas = new Canvas();
  grid = new Grid(10, 10 , grid_cell_offset );
  grid.create();
  // p5.js setup
  createCanvas(canvas.width, canvas.height);
}

function draw() {
  background(71);
  grid.draw(); 
}
