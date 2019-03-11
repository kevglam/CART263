/*****************

6 MINUTES OF HELL ft. YOUUUUUR BABY!
Kevin Lam

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

//These are arrays needed to formulate the video titles of BabyTube.
let subjects = [

  "Peppa Pig",
  "Baby",
  "Snoopy",
  "The Sheep Princess",
  "Spiderman",
  "Mr. Krabs",
  "Spongebob",
  "Timmy",
  "Tinky Winky",
  "Pooh Bear",
  "Elf",
  "Snow White",
  "Elsa",
  "Moana",
  "Mulan",
  "Hello Kitty",
  "Slime"
];
//This array is what makes a video title considered bad and corruptive.
let badAction = [

  "kills",
  "stabs",
  "does acid",
  "bakes",
  "harasses",
  "shanks",
  "gets high",
  "tramples",
  "shoots",
  "pushes",
  "drugs",
  "kidnaps",
  "shits",
  "eats",
  "has sex"
];

let action = [

  "sings",
  "dances",
  "plays",
  "makes slime",
  "learns the alphabet",
  "learns to count",
];

let adjective = [

  "happy",
  "sad",
  "amazing",
  "cheerful",
  "blue",
  "green",
  "joyful"
];

let target = [
  "brother",
  "tiger",
  "bear",
  "baby sheep",
  "Big Bird",
  "slime",
  "turkey",
  "bees",
  "cute dragon",
  "talking vegetables",
  "mom"
];

//Array to hold the video title
let videoTitle = [];
//Variable to hold the baby crying noise
let bgm = $('#bgm');
//Variable to hold the baby's laugh
let laugh = $('#laugh');
//These are your starting baby relationship stats
//You start off with 10 in each but make sure it does not drop to 0!
let babyAffection = 10;
let babySanity = 10;
//Timer variable to time the length of the game (6 minutes)
let timer;
//Timer variable to set how much time the baby stops crying
let stopCry;
//Timer variable to set how much time the baby stops crying (longer version for when you make it watch videos)
let stopCryTV;

$(document).ready(setup);
//Visual countdown to let the player know when the game is over.
let counter = 360;
let updateInterval = 1000; //Update rate
//Setting the countdown to count down by 1 and display the countdown
let countdown = setInterval(function () { 
  counter = counter - 1;
  $('#counter').text("Time until Adulthood: " + counter);
},updateInterval);
//This is the 6 minute game length
timer = 360000;
//This timer is to tell the game to decrement your baby's stats (every 2 seconds, you lose baby love points!)
affectionTimer = 2000;
//This is to stop the baby from crying for 5 seconds
stopCry = 5000;
//This is to stop the baby from crying for 30 seconds
stopCryTV = 30000;

//Timer to stop the game after 6 minutes and end game
let peaceTime = setTimeout(peace, timer);
//Timer associated to the baby losing love points every 2 seconds
let affectionTime = setTimeout(hell, affectionTimer);

function setup() {
  //Hide what should be hidden on start screen and show a click to play button
  $('#tv').hide();
  $('#click-to-begin').on('click',startGame);
  $('#Talk').hide();
  //What happens when you click the buttons to play BabyTube or when you play with your baby
  $('#1').on('click', babyTube);
  $('#2').on('click', playB);
}

//Annyang voice recognition!
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    //All of the voicelines make the baby feel more affection towards you and stops it from crying for a bit
    //What happens when the user says "Its Okay"
    'Its okay': function() {
      //This controls how many baby love points you can gain
      if (babyAffection < 10){
        babyAffection = babyAffection + 2;
      }
      if (babySanity < 10){
        babySanity = babySanity + 2;
      }

      else {
        console.log("your baby loves you so much!")
      }
      //Stop that annoying Crying!
      $('audio#bgm')[0].pause();
      //This is a timer to make the baby cry again at some point. As a parent, you can't have peace forever!
      let momentOfPeace = setTimeout(moment, stopCry);
    },

    //What happens when the user says "Stop Crying Cutie"
    'Stop Crying cutie': function() {
      //This controls how many baby love points you can gain
      if (babyAffection < 10){
        babyAffection++;
      }
      if (babySanity < 10){
        babySanity++;
      }

      else {
        console.log("your baby loves you so much!")
      }
      //Stop that annoying Crying!
      $('audio#bgm')[0].pause();
      //This is a timer to make the baby cry again at some point.
      let momentOfPeace = setTimeout(moment, stopCry);
    },

    //What happens when the user says "I Love you". It is the STRONGEST voiceline! Yay LOVE!
    'I Love You': function() {
      //This controls how many baby love points you can gain
      if (babyAffection < 10){
        babyAffection = babyAffection + 20;
      }
      if (babySanity < 10){
        babySanity = babySanity + 20;
      }

      else {
        console.log("your baby loves you so much!")
      }
      //Stop that annoying Crying! Play Laugh track!
      $('audio#bgm')[0].pause();
      $('audio#laugh')[0].play();
      //This is a timer to make the baby cry again at some point.
      let momentOfPeace = setTimeout(moment, stopCry);
    },

    //What happens when the user says "Boo!"
    'Boo': function() {
      //This controls how many baby love points you can gain
      if (babyAffection < 10){
        babyAffection++;
      }
      if (babySanity < 10){
        babySanity++;
      }

      else {
        console.log("your baby loves you so much!")
      }
      //Stop that annoying Crying! Play Laugh track!
      $('audio#bgm')[0].pause();
      $('audio#laugh')[0].play();
      //This is a timer to make the baby cry again at some point.
      let momentOfPeace = setTimeout(moment, stopCry);
    },

  }
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
};
//When you click to begin: Show what is needed to be shown and hide the click to play button.
function startGame() {
  $('#click-to-begin').remove();
  $('#tv').show();
  $('#Talk').show();
}

//What happens when you let baby watch videos
function babyTube(){
  console.log("BABYTUBE");
  //Reset title
  videoTitle = "";

  // Choose whether the video is gonna be a good video or a bad video.
  if (Math.random() >= 0.5) {
    //If it's a bad video, compose video with BAD ACTIONS + the normal parameters
    let subject = subjects[Math.floor(Math.random() * subjects.length)];

    let verb = badAction[Math.floor(Math.random() * badAction.length)];

    let adjectives = adjective[Math.floor(Math.random() * adjective.length)];

    let targets = target[Math.floor(Math.random() * target.length)];

    //Assemble!
    videoTitle = "NOW PLAYING: " + subject + " " + verb + " with " + adjectives + " " + targets

    //What happens to your baby if your baby watches a bad video.
    if(babyAffection > 0 || babySanity > 0) {
      babyAffection--;
      babySanity = babySanity - 2;
    }
    //If you've already passed the point of no return and have 0 baby love points
    else {
      console.log("your baby hates you");
    }

  }

  else {
    //If it's a good video. Compose the video title normally with subjects, verbs, adjectives and targets.
    let subject = subjects[Math.floor(Math.random() * subjects.length)];

    let verb = action[Math.floor(Math.random() * action.length)];

    let adjectives = adjective[Math.floor(Math.random() * adjective.length)];

    let targets = target[Math.floor(Math.random() * target.length)];

    //Assemble!
    videoTitle = "NOW PLAYING: " + subject + " " + verb + " with " + adjectives + " " + targets

    if(babyAffection > 0 || babySanity > 0) {
      babyAffection--;
      babySanity = babySanity + 10;
    }
    //If you've already passed the point of no return and have 0 baby love points
    else {
      console.log("your baby hates you");
    }

  }
  //Stop that annoying crying!!
  $('audio#bgm')[0].pause();
  //Start crying again at some point.
  let longPeace = setTimeout(longMoment, stopCryTV);
  //Responsive voice will tell you the video title that is being played.
  responsiveVoice.speak(videoTitle,'UK English Male', {volume: 1});

  console.log(videoTitle);
  //Display video title!
  $( "#videoTitle" ).text( videoTitle );
}

//This is what happens when you choose to play with your baby
function playB(){
  console.log("play with baby");
  //Only good things! You gain baby love points!
  if (babyAffection < 10){
    babyAffection = babyAffection + 10;
  }
  if (babySanity < 10){
    babySanity = babySanity + 10;
  }

  else {
    console.log("your baby loves you so much!")
  }
  //STOP. THAT. CRYING!
  $('audio#bgm')[0].pause();
  //Laugh baby laugh!
  $('audio#laugh')[0].play();
  //You get a small moment of peace when the baby stops crying
  let momentOfPeace = setTimeout(moment, stopCry);

}
//It's the end game now!
function peace(){
  console.log("Peace");
  //STOP. THAT. CRYING. FOR. GOOD!
  $('audio#bgm')[0].pause();
  //Hide all HUD
  $('#tv').hide();
  $('#premise').hide();
  $('#counter').hide();
  $('h1').hide();
  $('#click-to-begin').hide();
  //Ending text variable!
  let $ending = $('<div class="endingText"></div>');
  //If you have more than 2 love points in each category... Congratulations! You did great!
  if(babyAffection > 2 && babySanity > 2){
    $( "#endingText" ).text("You were an okay parent... I guess.. Congratulations! Your baby WILL NOT put you in a retirement home!");
  }
  //If not.. You're a bad parent. Sorry!
  else {
    $( "#endingText" ).text("You are a horrible parent.");
  }

}

//Restart crying and stop laughing after moment of peace
function moment(){
  console.log("moment");

  $('audio#bgm')[0].play();
  $('audio#laugh')[0].pause();

}
//Restart crying after a longer moment of peace
function longMoment(){
  console.log("moment");

  $('audio#bgm')[0].play();

}

//The function that deals with periodically decrementing your baby's love points.
function hell(){
  console.log("hell");
  //If it is not already at its lowest point (0), then decrement!
  if(babyAffection > 0 || babySanity > 0) {
    babyAffection--;
    babySanity--;
  }
  //If you are already at 0 in both categories... I hate to say it but...
  else {
    console.log("your baby hates you");
  }
  //Restart timer for the next decrement
  clearTimeout(affectionTime);
  affectionTime = setTimeout(hell, affectionTimer);

  console.log(babyAffection);
  console.log(babySanity);

}
