const BALL_SIZE = 20;
const BALL_SPAWN_DELAY = 500;
const GRAVITY = 0.03;

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");

class Ball {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 50;
    this.velocity = 1;
  }

  draw() {
    this.y = this.y + this.velocity;
    this.velocity = this.velocity + GRAVITY;
    ctx.beginPath();
    ctx.arc(this.x, this.y, BALL_SIZE, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}

var lastBallSpawnedTime = 0;
const balls = [];

const drawEverything = function (time) {
  if (time - lastBallSpawnedTime > BALL_SPAWN_DELAY) {
    balls.push(new Ball());
    lastBallSpawnedTime = time;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => ball.draw());
  window.requestAnimationFrame(drawEverything);
};

drawEverything();
