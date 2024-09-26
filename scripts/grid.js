class Grid {
     constructor(row, col, offset = 10, cell_size = 10) {
         this.row = row;
         this.col = col;
         this.offset = offset;
         this.cells = [];
         this.cells_size = cell_size;
         this.startX = 0; // Starting x position for centering
         this.startY = 0; // Starting y position for centering
     }
 
     center(canvasWidth, canvasHeight) {
         // Calculate the total grid width and height
         let gridWidth = this.col * this.offset;
         let gridHeight = this.row * this.offset;
 
         // Calculate the starting positions to center the grid
         this.startX = (canvasWidth - gridWidth) / 2;
         this.startY = (canvasHeight - gridHeight) / 2;
     }
 
     create() {
         for (let col = 0; col < this.col; col++) {
             for (let row = 0; row < this.row; row++) {
                 let x = this.startX + col * this.offset;
                 let y = this.startY + row * this.offset;
                 let cell = new Cell(x, y, this.cells_size);
                 this.cells.push(cell);
             }
         }
     }
 
     draw() {
         for (let index = 0; index < this.col * this.row; index++) {
             this.cells[index].draw();
         }
     }
 }
 