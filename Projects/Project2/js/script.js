/*****************

The Algorithm
Kevin Lam

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

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
  "Poo Bear",
  "Snow White",
  "Elsa",
  "Moana",
  "Mulan",
  "Hello Kitty",
  "Slime"
];

let action = [

  "kills",
  "stabs",
  "does acid",
  "bakes",
  "dances",
  "goes to school",
  "gets high",
  "skips",
  "shoots",
  "sings",
  "sleeps",
  "kidnaps",
  "shits",
  "eats",
  "draws"
];

let adjective = [

  "happy",
  "sad",
  "amazing",
  "gooey",
  "sexy",
  "cheerful",
  "blue",
  "crazy",
  "green",
  "confused"
];

let target = [
  "brother",
  "tiger",
  "bear",
  "baby sheep",
  "school",
  "slime",
  "turkey",
  "sister",
  "corn",
  "broccoli",
  "mom"
];

let videoTitle = [];
let bgm = $('#bgm');
let laugh = $('#laugh');
let babyAffection = 10;
let babySanity = 10;
let timer;
let stopCry;

$(document).ready(setup);

let counter = 360;
let updateInterval = 1000; //Update rate
let countdown = setInterval(function () { 
    counter = counter - 1;
    $('#counter').text("Time until Adulthood: " + counter);
  },updateInterval);
timer = 360000;
affectionTimer = 2000
stopCry = 5000


let peaceTime = setTimeout(peace, timer);
let affectionTime = setTimeout(hell, timer);

function setup() {
  $('#click-to-begin').on('click',startGame);
  $('#1').on('click', babyTube);
  $('#2').on('click', playB);
}


if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    //What happens when the user says "YES"
    'Yes': function() {
      nextShow();
      babyAffection++;
    },

    //What happens when the user says "NO"
    'No': function() {
      responsiveVoice.speak("Say it again. Say it again.",'UK English Male', {pitch: 2});
      nextShow();
      babyAffection--;
      babySanity--;
    },

    'I Love You': function() {
      responsiveVoice.speak("Say it again. Say it again.",'UK English Male', {pitch: 2});
      babyAffection++;
      babySanity++;
    }

  }
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
};

function nextShow() {
  // We empty the answer array for the new round
  videoTitle = "";
  // Loop for each option we'll offter
  //for (let i = 0; i < 3; i++) {
    // Choose the answer text randomly from the animals array
    let subject = subjects[Math.floor(Math.random() * subjects.length)];
    //addText(subject);
    // Add this answer to the answers array
    //videoTitle = subjects + action + adjective + targets
    //videoTitle.push(subject);

    let verb = action[Math.floor(Math.random() * action.length)];

    //videoTitle.push(verb);

    let adjectives = adjective[Math.floor(Math.random() * adjective.length)];

    //videoTitle.push(adjectives);

    let targets = target[Math.floor(Math.random() * target.length)];

    //videoTitle.push(targets);
    videoTitle = "VIDEO: " + subject + " " + verb + " with " + adjectives + " " + targets

    responsiveVoice.speak(videoTitle,'UK English Male');
    responsiveVoice.speak("Would you like to play the video?",'UK English Male');

//  }
  console.log(videoTitle);
  $( "#videoTitle" ).text( videoTitle );
//  $( "#videoTitle" ).draggable();
}


function startGame() {
  $('#click-to-begin').remove();

  nextShow();

}

function babyTube(){
  console.log("BABYTUBE");
}

function playB(){
  console.log("play with baby");
  $('audio#bgm')[0].pause();
  $('audio#laugh')[0].play();
  let momentOfPeace = setTimeout(moment, stopCry);

}

function addText (label){
  let $entry = $('<div class="vidtitle"></div>');
// Set the text in the div to our label
$entry.text(label);
}

function peace(){
  console.log("Peace");
  //Replace scene with the ending gif.

}

function moment(){
  console.log("moment");
  $('audio#laugh')[0].pause();
  $('audio#bgm')[0].play();

}

function hell(){
  console.log("hell");
  babyAffection--;
  babySanity--;
  clearTimeout(affectionTime);
  affectionTime = setTimeout(hell, affectionTimer);
  //Replace scene with the ending gif.

}
