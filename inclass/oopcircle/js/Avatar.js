"use strict";

class Avatar extends Agent {

  constructor(x,y,size,sizeLoss){
    super(x,y,size,'#559EFF');
    this.sizeLoss = sizeLoss;
    this.maxSize = size;
  }

  eat(other){
    if(this.alive == true){
      console.log ("in");
      this.size = constrain(this.size + other.size,0,this.maxSize);
      other.reset();
    }
  }

  update(){
    if(this.alive == true){
      this.x = mouseX;
      this.y = mouseY;

      this.size = constrain(this.size - this.sizeLoss,0,this.maxSize);
      if (this.size === 0) {
        this.alive = false;
      }
    }
  }
}
