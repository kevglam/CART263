//This script handles the visual shape that will be drawn for the "Okay" voice sample

class Firework04 extends Base {

  // Constructor for the circle shape that will be drawn
  // Pass arguments on to the super() constructor (e.g. for Agent)
  constructor(x,y,minSize,maxSize,velocityx,velocityy) {
    super(x,y,random(minSize,maxSize),'#6a1596');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.velocityx = velocityx;
    this.velocityy = velocityy;
  }

  //This handles how the shape will move on screen.
  //Based on the given velocity, the shape will move in consequence and offer a unique trajectory
  move() {
    this.x += this.velocityx;
    this.y += this.velocityy;
    this.velocityx = 15
    this.velocityy = 15
  }
  //If the shape exits the screen in any of the 4 corners, respawn it randomly on the canvas.
  reframe(){
    if(this.x < 0) {
      this.x = random(0,width);
    }

    else if (this.x > width){
      this.x = random(0,width);
    }

    if(this.y < 0) {
      this.y = random(0,width);
    }

    else if (this.y > width){
      this.y = random(0,width);
    }
  }

  //Reset position of the shape
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }
}
