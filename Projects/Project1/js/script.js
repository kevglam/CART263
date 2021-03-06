"use strict";

//Variable that contains the main scene image
let $intro;
//let $bgm;
let bgm = $('#bgm');
//Variables for the timer until the ending scene
let timer;
let timertemp;
//let x = document.getElementById("whip");
//let $whip;

$(document).ready(function(){
  //Variable that contains the main scene image
  $intro = $('#intro');
  //This is the starting timer value (10 hours)
  timer = 360000000;
  //$whip = $('#whip');
  //This is a timer to prompt the ending scene. In 10 hours the ending scene will play.
  let summitTime = setTimeout(summit, timer);

  //This is what happens when we click on the STOP button.
  $('#stop').on('click',function() {
    //Replace scene with the STOP image.
    $("#intro").attr("src", "assets/images/stop.jpg");
    //Responsive Voice Dialogue
    responsiveVoice.speak("We stopping? I want to push more! I must reach the top!", "US English Male", {rate: 1}, {volume: 2});

    //Restart timer and adds more time if you stop pushing
    timertemp = timer + 1000;
    timer = timertemp;
    console.log(timer);
    clearTimeout(summitTime);
    summitTime = setTimeout(summit, timer);
  });

  //This is what happens when we click on the PUSH button.
  $('#push').on('click',function() {
    //Replace scene with the Normal Speed walking gif.
    $("#intro").attr("src", "assets/images/normalspd.gif");
    //Play Beginning sounds
    $('audio#bgm')[0].play();
    $('audio#whip')[0].play();
    //Responsive Voice Dialogue
    responsiveVoice.speak("Fee, Fie, Fo! I Sisyphus, am the boulder master!", "US English Male", {rate: 1}, {volume: 2});
    responsiveVoice.speak("Let's get to work! I love this!", "US English Male", {rate: 1}, {volume: 2});
  });

  //This is what happens when we click on the FASTER button.
  $('#faster').on('click',function() {
    //Replace scene with EXTREME SPEED gif.
    $("#intro").attr("src", "assets/images/extremespd.gif");
    //Play whip cracking sound
    $('audio#whip')[0].play();
    //Responsive Voice Dialogue
    responsiveVoice.speak("Sir, may I go a little slower? My Hair is on fire. But I'm.. I'm still happy. This is great. This is fine.", "US English Male", {rate: 1}, {volume: 2});
  });

  //What happens when we click on the BREAK button.
  $('#break').on('click',function() {
    //Replace scene with breaktime gif.
    $("#intro").attr("src", "assets/images/breaktime.jpg");
    //Responsive Voice Dialogue
    responsiveVoice.speak("Yay! Break time! Time to drink this lovely glass of orange juice. It's so orange. More Orange than oranges could ever be. I should get back to work though. This boulder is not gonna push itself.", "US English Male", {rate: 1}, {volume: 2});
    //Restart timer and adds more time if you take a break.
    timertemp = timer + 1000;
    timer = timertemp;
    console.log(timer);
    clearTimeout(summitTime);
    summitTime = setTimeout(summit, timer);
  });


});
//This is the function that is called to replace the scene with the ending gif.
//After 10 Hours of playing the game, Sisyphus finally reaches the top contrary to legends.
function summit(){
  console.log("Summit");
  //Replace scene with the ending gif.
  $("#intro").attr("src", "assets/images/ending.gif");
}
