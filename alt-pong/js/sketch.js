let ball, p1, p2, retroFont, p1Serial, p2Serial, b1Serial, b2Serial, b3Serial, b4Serial;
let go = false;

var serial; //variable to hold an instance of the serial port library
var portName = 'COM3'; //fill in with YOUR port

function preload() {
  retroFont = loadFont('ARCADECLASSIC.TTF');
}

function setup() {

  // alert('-> Use keys A,Z and K,M to move the paddles\n' +
  //   '-> Press Spacebar to start each round, and R to reset the game\n' +
  //   '-> Hit the ball and make your opponent miss to score!\n\n' +
  //   'Good Luck!');

  createCanvas(800, 400)
  ball = new Ball(width / 2, height / 2, 10, 10);

  p1 = new Paddle(20, height / 2 - 50, 10, 100);
  p2 = new Paddle(width - 30, height / 2 - 50, 10, 100);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);
}

function draw() {
  background(52);
  backdrop();

  // movePaddles();
  changePaddles();
  p1.show();
  p2.show();

  let oob = ball.outOfBounds();
  if (oob) {
    // the ball stays at spawn till go = true
    go = false;
    if (oob == 'right') {
      p1.score++;
    } else {
      p2.score++
    }
  }

  if (go) ball.update();

  ball.hit(p1, p2);

  ball.show()
}


function movePaddles() {
  // 65 = 'a'
  if (keyIsDown(65)) {
    p1.move(-5);
  }

  // 90 = 'z'
  if (keyIsDown(90)) {
    p1.move(5);
  }

  // 75 = 'k'
  if (keyIsDown(75)) {
    p2.move(-5);
  }

  // 77 = 'm'
  if (keyIsDown(77)) {
    p2.move(5);
  }
}

function changePaddles() {
  // 83 = 's'
  if (keyIsDown(83)) {
    p1.grow();
  }

  // 88 = 'x'
  if (keyIsDown(88)) {
    p1.shrink();
  }
}

function keyTyped() {
  if (key == ' ') {
    go = true;
  }

  if (key == 'r') {
    p1.score = 0;
    p2.score = 0;
    ball.resetball();
    go = false;
  }

  // for safety
  return false;
}

function map(val, in_min, in_max, out_min, out_max) {
  return int((val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}

function serialEvent() {
  //receive serial data here
  var data = serial.readLine();
  if (data === "") return;
  console.log(data);
  var array = data.split(',')
  // console.log(array[1]);
  p1.pos.y = map(array[0], 0, 255, 0, height - 1)
  p1.pos.y = constrain(p1.pos.y, 10, height - 10 - p1.h);
  p2.pos.y = map(array[1], 0, 255, 0, height - 1)
  p2.pos.y = constrain(p2.pos.y, 10, height - 10 - p2.h);
}

function serverConnected() {
  console.log('connected to the server');
}

function portOpen() {
  console.log('the serial port opened!');
}

function serialError(err) {
  console.log('something went wrong with the port. ' + err);
}

function portClose() {
  console.log('the port was closed');
}
