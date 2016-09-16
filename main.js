function setup() {
  // Set up the visualization to fill the entire window
  createCanvas(window.innerWidth, window.innerHeight);
  // Create an audio input node, start the inputnd connect the ouput (audio out through the speakers)
  source = new p5.AudioIn();
  source.start();
  source.connect();

  // Create a fast Fourier transform to analyze audio signal
  fft = new p5.FFT();
}

function draw() {
  // Extract the frequency spectrum and waveform
  var spectrum = fft.analyze(source);
  var wave = fft.waveform(source);
  background(0, 0, 0, 20);

  // Draw white background for frequency spectrum
  fill(255);
  stroke(255);
  rect(0, 0, width / 2, height);

  // Draw rectangles with frequencies
  spectrum.splice(200, spectrum.length);
  fill(0);
  for (i = 0; i < spectrum.length; i++) {
    rect(
      i / spectrum.length * width / 2, 0,
      width / 2 / spectrum.length, spectrum[i] / 255 * height
    );
  }

  // rects with waveform
  noFill();
  strokeWeight(1);
  beginShape();
  for (i = 0; i < wave.length; i++) {
    vertex(
      (width * 3 / 4) - wave[i] / 1 * (width / 4),
      i / wave.length * height
    );
  }
  endShape();
}

// Resize the canvas when the window is resized
window.onresize = resized;
function resized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
