"use strict";

class Shape {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
  display() {
    // A generic shape cannot be displayed
    // But it makes sense to tell anyone extending this class to include one!
  }
}
