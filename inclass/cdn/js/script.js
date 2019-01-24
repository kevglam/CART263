/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!

  setInterval(update, 1000);

  $("span").on("click", spanClicked);
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
