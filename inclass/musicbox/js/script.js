"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let frequencies = [296.33, 332.62, 395.56, 444.00, 498.37];
let pattern = ['x','','x','o','','x','x','*'];
let hihat;
let synth;
let kick;
let snare;
let patternIndex = 0;
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

synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 200
    }
  });

kick = new Pizzicato.Sound('assets/sounds/kick.wav');
snare = new Pizzicato.Sound('assets/sounds/snare.wav');
hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');


}


// draw()
//
// Description of draw()

function draw() {

}

function playNote(){

  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();

}


function mousePressed (){
  setInterval(playNote, 500);
  setInterval(playDrum, 250);

}

function playDrum(){
  let symbols = pattern[patternIndex];

  if (symbols.indexOf('x') !== -1){
    kick.play();
  }

  if (symbols.indexOf('o') !== -1){
    snare.play();
  }

  if (symbols.indexOf('*') !== -1){
    hihat.play();
  }

  patternIndex++;
if (patternIndex >= pattern.length) {
  patternIndex = 0;
}
}
