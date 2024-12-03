class Cell {
     constructor(x, y, size) {
         this.x = x;
         this.y = y;
         this.size = size;
         this.wave = false; // Flag to enable oscillation
         this.startY = this.y; // Store the original y position
         this.targetY = this.y + 2; // Target y position for oscillation
         this.oscillationSpeed = 0.05; // Speed of the oscillation
         this.lerpAmount = 0; // Lerp amount to control oscillation
         this.direction = 2; // Direction of movement (1 for down, -1 for up)
     }
 
     update() {
          this.color = red;
          this.lerpAmount += this.oscillationSpeed * this.direction;
 
         this.lerpAmount = constrain(this.lerpAmount, 0, 1);
 
         this.y = lerp(this.startY, this.targetY, this.lerpAmount);
 
         if (this.lerpAmount === 0 || this.lerpAmount === 1) {
             this.direction *= -1;
         }
     }
 
     draw() {
         fill(255);
         stroke(0);
         rect(this.x, this.y, this.size, this.size);
     }
 }