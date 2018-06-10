var run = function(){
var canvas = document.getElementById("playground");
var ctx = canvas.getContext('2d');
var xSpaceBetweenPipe = 100;
var ySpaceBetwwenPipe = 80;


var KEYBOARD = {
  "UP": 10
};


var pipes = [
  {
    x: 250,
    y: randomY()
  },
  {
    x: 400,
    y: randomY()
  },
  {
    x: 550,
    y: randomY()
  },
  {
    x: 700,
    y: randomY()
  },
  {
    x: 850,
    y: randomY()
  }
];

function randomY(){
  return Math.floor(Math.random() * (200 - ySpaceBetweenpipe));
}
console.log(pipes);
}
run();
