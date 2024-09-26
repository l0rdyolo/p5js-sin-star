class Cell{
     constructor(x,y,size){
          this.x = x;
          this.y = y;
          this.size = size;
          // this.walls = [true, true, true, true];
          // this.visited = false;
     }

     draw(){
          fill(255);
          stroke(0);
          rect(this.x,this.y, this.size, this.size);        
     }
}