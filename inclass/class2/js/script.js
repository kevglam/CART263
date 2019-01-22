"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let mySquare;
let myCircle;
let myOtherCircle;
let myLine;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare = new Square(random(0,width),random(0,height),100);
  myCircle = new Circle(random(0,width),random(0,height),200,color(100,100,200));
  myOtherCircle = new Circle(random(0,width),random(0,height),200,color(200,100,200));
  myLine = new Line (random(0,width), random(0,height),random(0,width),random(0,height));

}
function draw() {
  background(255);
  mySquare.update();
  myCircle.update();
  myOtherCircle.update();
  myLine.update();
  mySquare.display();
  myCircle.display();
  myOtherCircle.display();
  myLine.display();
}
