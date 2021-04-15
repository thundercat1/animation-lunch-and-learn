const BALL_SIZE = 20;
const BALL_SPAWN_DELAY = 5000;
const GRAVITY = 0.01;

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

  handleCanvasClicked(e) {
    if (Math.abs(e.clientX - this.x) < 2 * BALL_SIZE) {
      if (Math.abs(e.clientY - this.y) < 2 * BALL_SIZE) {
        this.bounce();
      }
    }
  }

  bounce() {
    this.velocity = -Math.abs(this.velocity);
  }
}

var lastBallSpawnedTime = 0;
const balls = [];
var bombs = 3;

const drawEverything = function (time) {
  if (time - lastBallSpawnedTime > BALL_SPAWN_DELAY) {
    balls.push(new Ball());
    lastBallSpawnedTime = time;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => ball.draw());
  ctx.font = "16px serif";
  ctx.fillText(`Bombs: ${bombs}`, 50, 50);
  window.requestAnimationFrame(drawEverything);
};

canvas.addEventListener("click", (e) => {
  balls.forEach((ball) => ball.handleCanvasClicked(e));
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (bombs > 0) {
      balls.forEach((ball) => ball.bounce());
      bombs = bombs - 1;
    }
  }
});

drawEverything();
