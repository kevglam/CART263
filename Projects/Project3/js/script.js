"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let kick;
let xspeed = 2;
let yspeed = 2;
let xdirection = 2;
let ydirection = 2;
let activator = 0;
let villager;
let villagerArray = [];

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth,windowHeight);
background('#000000');

kick = new Pizzicato.Sound('assets/sounds/kick.wav');

}

function keyPressed() {
  ///let summitTime = setTimeout(reset, 5000);
  // Do something
  playKick();
  console.log(activator);
  activator++;

  ///clearTimeout(summitTime);
  ///summitTime = setTimeout(reset, 5000);


  //if(activator === 10){
  villagerArray.push (new Villager(random(0,width),random(0,height),1,10,2,2));
//}


  return false; // prevent any default behaviour

}
// draw()
//
// Description of draw()

function draw() {
  for (let i = 0; i < villagerArray.length; i++) {
      villagerArray[i].display();
      villagerArray[i].move();
      villagerArray[i].reframe();
      //console.log("hi");
    }
}



function playKick (){
kick.play();

}


function reset () {

activator = 0;
villagerArray = [];

}
