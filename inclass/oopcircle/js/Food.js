"use strict";

class Food extends Agent {

  constructor(x,y,minSize,maxSize){
    super (x,y,random(minSize,maxSize), '#E8810C');
    this.minSize = minSize;
    this.maxSize = maxSize;

  }

  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }
}
