const BALL_SIZE = 20;

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");

class Ball {
  constructor() {
    this.draw = this.draw.bind(this);
    this.x = 50;
    this.y = 50;
    this.velocity = 0;
  }

  draw() {
    this.y = this.y + 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, BALL_SIZE, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}

const b = new Ball();

const drawEverything = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  b.draw();
  window.requestAnimationFrame(drawEverything);
};

drawEverything();
