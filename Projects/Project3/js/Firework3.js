// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Firework3 extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,minSize,maxSize,velocityx,velocityy) {
    super(x,y,random(minSize,maxSize),'#ff8260');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.velocityx = velocityx;
    this.velocityy = velocityy;
  }

  move() {
      this.x += this.velocityx;
      this.y += this.velocityy;
      this.velocityx = random(0,firework3Array.maxSpeed);
      this.velocityy = random(10,firework3Array.maxSpeed);
  }

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

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }
}
