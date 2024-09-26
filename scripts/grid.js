class Grid{
     constructor(row, col , offset = 10 , cell_size = 10){
          this.row = row;
          this.col = col;
          this.offset = offset
          this.cells = [];
          this.cells_size = cell_size;
     }

     create(){
          for (let col = 0; col < this.col; col++) {
               for (let row = 0; row < this.row; row++) {
                    let x = col * this.offset;
                    let y = row * this.offset;
                    let cell = new Cell(x, y , this.cells_size); 
                    this.cells.push(cell);         
               }
          }
     }

     draw(){
          for (let index = 0; index < this.col * this.row; index++) {
               this.cells[index].draw();
          }
     }
}