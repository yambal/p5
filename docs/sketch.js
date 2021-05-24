var mic
var vol = 0

function setup() {
  var myDiv = createDiv('click to start audio');
  myDiv.position(0, 0);

  var mySynth = new p5.MonoSynth();

  // This won't play until the context has started
  mySynth.play('A6');

  // Start the audio context on a click/touch event
  userStartAudio().then(function() {
     myDiv.remove();
   });
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
   var vol = mic.getLevel();
  
  fill(127);
  stroke(0);
  
  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 0.5, height, 0);
  ellipse(width/2, h - 25, 50, 50);
}
