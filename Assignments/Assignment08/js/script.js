"use strict";

/*****************

Drum Kit

I have created a kit that allows user to play a Drum Sequence then play a looped version of the sequence.
******************/
$(document).ready(setup);

let kick;
let snare;
let hihat;
let patternIndex = 0;
let pattern = [];
let drumTrack = 0;

function setup() {
  // This code will run when the document is ready!
  kick = new Pizzicato.Sound('assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');


  $('#drums').on('click',function() {
    if(drumTrack === 0){
    setInterval(playPattern, 250);
    }
    drumTrack = 2;
  });

  $('#clean').on('click',function() {
    pattern = [];
  });

  $('#Kick').click(function() {
    console.log("Kick");
    playKick();
  });

  $('#Snare').click(function() {
    console.log("Snare");
    playSnare();
  });

  $('#Hihat').click(function() {
    console.log("Hihat");
    playHihat();
  });



}


function playKick(){

  kick.play();
  pattern.push("x");

}

function playSnare(){

  snare.play();
  pattern.push("o");

}

function playHihat(){

  hihat.play();
  pattern.push("*");

}

function playPattern(){
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
