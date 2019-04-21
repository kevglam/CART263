//Strictly use "use strict"!
"use strict";

/*****************

Drum Prodigy Taiko!
Kevin Lam

You are a drum master in the tiny village of Newindigo and tasked with teaching
the newborn Taiko.

******************/

//These are variables used to hold the drum sounds
let kick;
let snare;
let hihat;
let okay;
let rubber;
let taiko;
//This variable keeps track of the opening of the instructions
let instruc = 0;
//This Array keeps track of the drum sequence that is being played
let pattern = [];
//This variable helps keep track of whether or not a drum sequence is already playing
let drumActive = 0;
//These arrays help store and play the drum sounds. 1 for each specific sound.
let firework01Array = [];
let firework02Array = [];
let firework03Array = [];
let firework04Array = [];
let firework05Array = [];
let firework06Array = [];
//This counter helps reset Taiko's drum knowledge.
let resetTime = setTimeout(reset, 5000);
//This variable helps keep track of how much more does Taiko need to learn before becoming autonomous
let progression = 0;


function preload() {

}


//Annyang initialization
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {

    //These are voice commands the user can say to give Taiko confidence and speed up Taiko's learning.
    'You got it': function() {
      //This adds 20 "Learning points" to Taiko
      progression = progression + 20;
    },

    'Dont give up': function(){
      //This adds 20 "Learning points" to Taiko
      progression = progression + 20;
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}


function setup() {
  //Create canvas for p5 and for our playspace
  createCanvas(windowWidth,windowHeight);
  //Background color for our canvas
  background('#ffffff');

  //Creating and storing our 6 sounds in their respective variables
  kick = new Pizzicato.Sound('assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');
  okay = new Pizzicato.Sound('assets/sounds/okay.wav');
  rubber = new Pizzicato.Sound('assets/sounds/rubber.wav');
  taiko = new Pizzicato.Sound('assets/sounds/taiko.wav');

  //This is to allow user to show/hide the instructions by clicking on the nav bar
  $( "#top-nav" ).click(function() {

  //If the instructions is showing, when you click on the nav, it will hide it.
  //The instruc variable helps keep track of whether or not the instructions are visible.
    if (instruc === 0){
    $("#instructions").hide();
    instruc = 2;
  }
  //If the instructions is hidden, when you click on the nav, it will show it.
  else {
    $("#instructions").show();
    instruc = 0;
  }
  });

}

//This function defines what happens when the user presses on the controls
function keyPressed() {

//If the user presses on the "A" key, play Kick noise and increment Taiko's learning process
  if (keyCode === 65) {
    playKick();
    progression++;

  }
//If the user presses on the "S" key, play Snare noise and increment Taiko's learning process
  else if (keyCode === 83) {
    playSnare();
    progression++;


  }
//If the user presses on the "D" key, play Hihat noise and increment Taiko's learning process
  else if (keyCode === 68) {
    playHihat();
    progression++;
  }
//If the user presses on the "J" key, play "OKAY" voice sample and increment Taiko's learning process
  else if (keyCode === 74) {
    playOkay();
    progression++;
  }
//If the user presses on the "K" key, play Rubberband noise and increment Taiko's learning process
  else if (keyCode === 75) {
    playRubber();
    progression++;
  }
//If the user presses on the "L" key, play Taiko drum noise and increment Taiko's learning process
  else if (keyCode === 76) {
    playTaiko();
    progression++;
  }

//If Taiko's process reaches 1000 points, he becomes autonomous and the drum sequence that has been played will loop
//Each key pressed is 1 point
//Each voice encouragement said is 20 points
  if (progression === 1000){
    console.log("Taiko is autonomous");
    //Set interval to loop whatever pattern Taiko remembers
    setInterval(playPattern, 270);
  }

  return false; // prevent any default behaviour

}

//Every sound generates a colored visual on screen!
//These next lines help draw them
function draw() {
  //Draw visuals associated to the kick sound
  //The array helps draw and update the position of every single shape associated to the kick sound
  for (let i = 0; i < firework01Array.length; i++) {
    firework01Array[i].display();
    firework01Array[i].move();
    firework01Array[i].reframe();
  }
  //Draw visuals associated to the snare sound
  //The array helps draw and update the position of every single shape associated to the snare sound
  for (let i = 0; i < firework02Array.length; i++) {
    firework02Array[i].display();
    firework02Array[i].move();
    firework02Array[i].reframe();
  }
  //Draw visuals associated to the hihat sound
  //The array helps draw and update the position of every single shape associated to the hihat sound
  for (let i = 0; i < firework03Array.length; i++) {
    firework03Array[i].display();
    firework03Array[i].move();
    firework03Array[i].reframe();

  }
  //Draw visuals associated to the "Okay" voice sample
  //The array helps draw and update the position of every single shape associated to the "Okay" voice sample
  for (let i = 0; i < firework04Array.length; i++) {
    firework04Array[i].display();
    firework04Array[i].move();
    firework04Array[i].reframe();

  }
  //Draw visuals associated to the rubberband sound
  //The array helps draw and update the position of every single shape associated to the rubberband sound
  for (let i = 0; i < firework05Array.length; i++) {
    firework05Array[i].display();
    firework05Array[i].move();
    firework05Array[i].reframe();

  }
  //Draw visuals associated to the taiko drum sound
  //The array helps draw and update the position of every single shape associated to the taiko drum sound
  for (let i = 0; i < firework06Array.length; i++) {
    firework06Array[i].display();
    firework06Array[i].move();
    firework06Array[i].reframe();

  }
}
//Function to play the kick sound
function playKick (){
  //play
  kick.play();
  //Add the kick sound to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("x");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
  //Add a drawing that represents this noise into its respective array. This will then be drawn
  firework01Array.push (new Firework01(random(0,width),random(0,height),1,10,2,2));

}

function playSnare (){
  snare.play();
  //Add the snare sound to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("o");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
//Add a drawing that represents this noise into its respective array. This will then be drawn
  firework02Array.push (new Firework02(random(0,width),random(0,height),11,19,4,0));

}

function playHihat (){
  hihat.play();
  //Add the hihat sound to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("*");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
//Add a drawing that represents this noise into its respective array. This will then be drawn
  firework03Array.push (new Firework03(random(0,width),random(0,height),2,5,4,0));

}

function playOkay (){
  okay.play();
  //Add the "Okay" voice sample to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("k");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
//Add a drawing that represents this noise into its respective array. This will then be drawn
  firework04Array.push (new Firework04(random(0,width),random(0,height),5,10,5,5));

}

function playRubber (){
  rubber.play();
  //Add the rubberband sound to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("r");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
//Add a drawing that represents this noise into its respective array. This will then be drawn
  firework05Array.push (new Firework05(random(0,width),random(0,height),1,20,2,2));

}

function playTaiko (){
  taiko.play();
  //Add the taiko drum sound to the sequence (This is to keep record of when Taiko learned this for the loop)
  pattern.push("t");
  //If this is the last sound played and the user stops playing, he/she has 5 seconds to play another sound
  //before Taiko FORGETS IT ALL!
  clearTimeout(resetTime);
  resetTime = setTimeout(reset, 5000);
//Add a drawing that represents this noise into its respective array. This will then be drawn
  firework06Array.push (new Firework06(random(0,width),random(0,height),1,10,2,2));

}

//This is the function that takes care of erasing Taiko's memories if the user stops playing
function reset () {
  //Clear all arrays containing visuals and stop drawing!
  firework01Array = [];
  firework02Array = [];
  firework03Array = [];
  firework04Array = [];
  firework05Array = [];
  firework06Array = [];
  //Reset his progression!
  progression = 0;
}
// This function handles playing the recorded final drum pattern that Taiko has played if the user succeeds
function playPattern(){
  let symbols = pattern[patternIndex];

  //If the symbol recorded was an 'x', then play kick sound
  if (symbols.indexOf('x') !== -1){
    playKick();
  }
//If the symbol recorded was an 'o', then play snare sound
  if (symbols.indexOf('o') !== -1){
    playSnare();
  }
//If the symbol recorded was an '*', then play hihat sound
  if (symbols.indexOf('*') !== -1){
    playHihat();
  }
//If the symbol recorded was an 'k', then play "Okay" voice sample
  if (symbols.indexOf('k') !== -1){
    playOkay();
  }
//If the symbol recorded was an 'r', then play rubberband sound
  if (symbols.indexOf('r') !== -1){
    playRubber();
  }
//If the symbol recorded was an 't', then play taiko drum sound
  if (symbols.indexOf('t') !== -1){
    playTaiko();
  }


}
