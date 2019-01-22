class myLine extends Shape {

  constructor (x,y,x2,y2){
    super(x,y,undefined);
    this.x2 = x2;
    this.y2 = y2;
  }

  update(){
    super.update();
    this.x2 += random (-1,1);
    this.y2 += random (-1,1);
   }

  display() {
    push();
    Stroke(0);
    line(this.x,this.y,this.x2,this.y2);
    pop();
  }
}
