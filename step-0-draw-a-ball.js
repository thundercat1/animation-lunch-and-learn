const BALL_SIZE = 20;

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, BALL_SIZE, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();
