"use strict";

let $intro;
//let x = document.getElementById("whip");
//let $whip;

let x = document.getElementById("whip");

$(document).ready(function(){

  $intro = $('#intro');
  //$whip = $('#whip');
  responsiveVoice.speak("My name is Sisyphus, and I cannot wait to push this boulder! Up, Up and away! Tell me when I can finally get started boss.", "French Male", {rate: 1}, {volume: 1});

  $('#stop').on('click',function() {

      $("#intro").attr("src", "assets/images/stop.jpg");
      responsiveVoice.speak("We stopping? I want to push more!", "French Male", {rate: 1}, {volume: 1});

    });

    $('#push').on('click',function() {

      $("#intro").attr("src", "assets/images/normalspd.gif");
      responsiveVoice.speak("Haha. Let's get to work! I love this!", "French Male", {rate: 1}, {volume: 1});


      });

    $('#faster').on('click',function() {

        $("#intro").attr("src", "assets/images/extremespd.gif");
        responsiveVoice.speak("Sir, may I go a little slower? My Hair is on fire. But I'm.. I'm still happy. This is great. This is fine.", "French Male", {rate: 1}, {volume: 1});
        $('#whip').play()

      });

      $('#break').on('click',function() {

        $("#intro").attr("src", "assets/images/breaktime.jpg");
        responsiveVoice.speak("Yay! Break time! Time to drink this lovely glass of orange juice. It's so orange. More Orange than oranges could ever be. I should get back to work though. This boulder is not gonna push itself.", "French Male", {rate: 1}, {volume: 1});

        });

});

function playVid() {
  vid.play();
}
