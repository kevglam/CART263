/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
$(document).ready(setup);

let counter = 0;
let countSecret1 = 0;
let countSecret2 = 0;
let countSecret3 = 0;

function setup() {
  // This code will run when the document is ready!

  setInterval(update, 1000);

  $("span").on("click", spanClicked);

  $('#secret').css("color", "white");
  $('#secret2').css("color", "white");
  $('#secret3').css("color", "white");

  $('#secret').hover(function() {

    $('#secret').css("color", "black");
    $('#secret').css("background-color", "yellow");

    if (countSecret1 == 0){
      counter++;
      $('#secretCount').text("Secrets Found " + counter +"/3");
      countSecret1++;
    }

//  $('#secretCount').off();
  });

  $('#secret2').hover(function() {

    $('#secret2').css("color", "black");
    $('#secret2').css("background-color", "yellow");

    if (countSecret2 == 0){
      counter++;
      $('#secretCount').text("Secrets Found " + counter +"/3");
      countSecret2++;
    }

  });

  $('#secret3').hover(function() {

    $('#secret3').css("color", "black");
    $('#secret3').css("background-color", "yellow");

    if (countSecret3 == 0){
      counter++;
      $('#secretCount').text("Secrets Found " + counter +"/3");
      countSecret3++;
    }

  });

}

function update (){
  console.log("Beep, Boop.");

  $("span").each(updateSpan);
}

function updateSpan (){
  console.log("Aliens are real.. SO ARE SPANS!");

  if((Math.random()) < 0.1){
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

function spanClicked (){
  $(this).removeClass("revealed");
  $(this).addClass("redacted");

  console.log("YOU CAN'T HIDE THE TRUTH!")

}
