"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


$(document).ready(setup);

function setup() {
  $.getJSON('assets/data.json',dataLoaded);
}

function dataLoaded(data){
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);

  let verb = 'is';

  if (condiment.charAt(condiment.length-1) === 's'){
    verb = "are";
  }

  else {
    verb = "is";
  }

  console.log(verb);

  let cat = getRandomElement(data.cats);
  console.log(cat);

  let ana = "a";

  if (cat.charAt(0) === 'A' || cat.charAt(0) === 'O' || cat.charAt(0) === 'E' || cat.charAt(0) === 'I' || cat.charAt(0) === 'U'){
    ana = "an";
  }

  else {
    ana = "a";
  }

  let room = getRandomElement(data.rooms);
    console.log(room);

    let anaroom = "a";

    if (room.charAt(0) === 'a' || room.charAt(0) === 'o' || room.charAt(0) === 'e' || room.charAt(0) === 'i' || room.charAt(0) === 'u'){
      anaroom = "an";
    }

    else {
      anaroom = "a";
    }

  //  let description =

    $("#description").text(condiment + " " + verb + " like " + ana + " " + cat + " in " + anaroom + " " + room + ".");
}

function getRandomElement(array){

  let element = array[Math.floor(Math.random() * array.length)];
  return element;

}
