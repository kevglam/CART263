"use strict";

class Agent {

  constructor(x,y,size,color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.alive = true;
    //console.log (this.x,this.y, this.size, this.color);
  }

  overlap(other) {
    
    if(this.alive == true){
      let d = dist (this.x,this.y,other.x,other.y);
      if(dist < this.size/2 + other.size/2){
        //this.size = (this.size + other.size);
        return true;
      }

      else {
        return false;
      }
    }

  }


  display () {
    if (this.alive == true) {
      push();
      noStroke();
      fill(this.color);
      ellipse(this.x,this.y,this.size);
      pop();

    }
  }



}
