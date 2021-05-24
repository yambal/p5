let mic;

function setup() {
  let cnv = createCanvas(710, 200);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);

  if(mic) {
     
  
    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel();
    fill(127);
    stroke(0);

    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 1, height, 0);
    ellipse(width / 2, h - 25, 50, 50);
  }
}

/* https://editor.p5js.org/kaori/sketches/nZuHBaT2 */

/*
function setup() {
  // mimics the autoplay policy
  getAudioContext().suspend();

  let mySynth = new p5.MonoSynth();

  // This won't play until the context has resumed
  mySynth.play('A6');
}
function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text(getAudioContext().state, width/2, height/2);
}
function mousePressed() {
  userStartAudio();
}
*/