"use strict";

/*****************

Circle Eater
Pippin Barr

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

// Constants defining key quantities
const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 0.7;

// Avatar is an object defined by its properties
let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#D64557'
}

// Food is an object defined by its properties
let food = {
  x: 0,
  y: 0,
  velocityx: 2,
  velocityy: 2,
  maxSpeed: 5,
  size: 64,
  color: '#2EB5AE'
}

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, position the food, remove the cursor

function setup() {
  createCanvas(500,500);
  positionFood();
  noCursor();
}


// draw()
//
// Move the avatar, check for collisions, display avatar and food

function draw() {
  // Make sure the avatar is still alive - if not, we don't run
  // the rest of the draw loop
  if (!avatar.active) {
    // By using "return" the draw() function exits immediately
    return;
  }

  // Otherwise we handle the game
  background(197, 196, 204);
  updateAvatar();
  checkCollision();
  displayAvatar();
  displayFood();
  updateFood();
}

// updateAvatar()
//
// Set the position to the mouse location
// Shrink the avatar
// Set it to inactive if it reaches a size of zero
function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  // Shrink the avatar and use constrain() to keep it to reasonable bounds
  avatar.size = constrain(avatar.size - AVATAR_SIZE_LOSS,0,avatar.maxSize);
  if (avatar.size === 0) {
    avatar.active = false;
  }
}

// checkCollision()
//
// Calculate distance of avatar to food
// Check if the distance is small enough to be an overlap of the two circles
// If so, grow the avatar and reposition the food
function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + AVATAR_SIZE_GAIN,0,avatar.maxSize);
    positionFood();
  }
}

// displayAvatar()
//
// Draw the avatar in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

// displayFood()
//
// Draw the food in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  pop();
}

// positionFood()
//
// Set the food's position properties to random numbers within the canvas dimensions
function positionFood() {
  food.x = random(0,width);
  food.y = random(0,height);
}
//  updateFood()
//
// Move food based on velocity
// > Increase or "move" food's x and y positioning by adding food's velocityx/y to them.
// Randomize food's velocities to a number between 0 - the Max Speed (5)
//
// If statements that catch and reposition the food if it goes out of bounds
function updateFood() {
  food.x += food.velocityx;
  food.y += food.velocityy;
  food.velocityx = random(0,food.maxSpeed);
  food.velocityy = random(0,food.maxSpeed);

//
// If the food's x goes out of the canvas frame, reset it to a random position within the play area.
  if (food.x < 0) {
    food.x = random(0,width);
  }

  else if (food.x > width) {
    food.x = random(0,width);
  }

//
// If the food's y goes out of the canvas frame, reset it to a random position within the play area.

  if (food.y < 0) {
    food.y = random(0,height);
  }

  else if (food.y > height) {
    food.y = random(0,height);
  }
}
