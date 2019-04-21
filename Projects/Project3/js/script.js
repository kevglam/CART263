"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let kick;
let snare;
let hihat;
let patternIndex = 0;
let pattern = [];
let xspeed = 2;
let yspeed = 2;
let xdirection = 2;
let ydirection = 2;
let drumActive = 0;
let villager;
let villager2;
let firework3;
let villagerArray = [];
let villager2Array = [];
let firework3Array = [];
let summitTime = setTimeout(reset, 5000);

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'play': function() {
      if (drumActive === 0){
      setInterval(playPattern, 270);
    }
    drumActive = 2;
  },

  'I hate it': function(){
    location.reload(true);
  }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}


function setup() {

createCanvas(windowWidth,windowHeight);
background('#240041');

kick = new Pizzicato.Sound('assets/sounds/kick.wav');
snare = new Pizzicato.Sound('assets/sounds/snare.wav');
hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');


$( "#test" ).click(function() {
  $("#test").hide();
});


}

function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    playKick();


  } else if (keyCode === RIGHT_ARROW) {
    playSnare();


  } else if (keyCode === DOWN_ARROW) {
    playHihat();
  }

  else if (keyCode === ENTER) {
location.reload(true);
  }

  else if (keyCode === BACKSPACE) {
    pattern = [];
    drumActive = 0;

  }


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

    for (let i = 0; i < villager2Array.length; i++) {
        villager2Array[i].display();
        villager2Array[i].move();
        villager2Array[i].reframe();
        //console.log("hi");
      }

      for (let i = 0; i < firework3Array.length; i++) {
          firework3Array[i].display();
          firework3Array[i].move();
          firework3Array[i].reframe();

        }
}



function playKick (){
kick.play();
pattern.push("x");
clearTimeout(summitTime);
summitTime = setTimeout(reset, 5000);

villagerArray.push (new Villager(random(0,width),random(0,height),1,10,2,2));

}

function playSnare (){
snare.play();
pattern.push("o");
clearTimeout(summitTime);
summitTime = setTimeout(reset, 5000);

villager2Array.push (new Villager2(random(0,width),random(0,height),11,19,4,0));

}

function playHihat (){
hihat.play();
pattern.push("*");
clearTimeout(summitTime);
summitTime = setTimeout(reset, 5000);

firework3Array.push (new Firework3(random(0,width),random(0,height),2,5,4,0));

}


function reset () {

villagerArray = [];
villager2Array = [];
firework3Array = [];

}

function playPattern(){
  let symbols = pattern[patternIndex];


  if (symbols.indexOf('x') !== -1){
    playKick();
  }

  if (symbols.indexOf('o') !== -1){
    playSnare();
  }

  if (symbols.indexOf('*') !== -1){
    playHihat();
  }

  patternIndex++;
  if (patternIndex >= pattern.length) {
    patternIndex = 0;
  }

}
