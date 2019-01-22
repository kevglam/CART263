"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


let avatar;
let food;

function setup() {

  createCanvas(500,500);
  avatar = new Avatar(mouseX,mouseY,64,1);
  food = new Food(random(0,width),random(0,height),5, 100);
  noCursor();

}


function draw() {

  background(197, 196, 204);
  avatar.update();
  //noCursor();
  if(avatar.overlap(food)){
    console.log ("in");
    avatar.eat(food);
  }
  avatar.display();
  food.display();

}
