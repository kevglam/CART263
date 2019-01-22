class Circle extends Shape {
  constructor(x,y,size,c) {
    super(x,y,size);
    this.c = c; // Color
  }
  update() {
    super.update(); // Do the generic Shape update()
    this.size += random(-1,1); // Also jiggle in size
  }
  display() {
    push();
    ellipseMode(CENTER);
    fill(this.c);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
