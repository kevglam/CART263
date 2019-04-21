//This is the base for all the shapes

class Base {


  //Main Constructor
  //Pass all arguments to the constructor
  constructor(x,y,size,agentColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = agentColor;
    this.active = true;
  }


  update() {

  }

  //This displays the circle
  display() {
    // Don't display if not active
    if (!this.active) {
      return;
    }

    // Set fill and stroke then draw an ellipse at this agent's position and with its size
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
