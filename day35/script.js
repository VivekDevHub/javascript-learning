/* =====================================================
   SELECT DOM ELEMENTS
   ===================================================== */

// Game board where snake and food appear
const board = document.querySelector(".board");

// Modal elements (Start / Game Over screen)
const startBtn = document.getElementById("start-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const finalScore = document.getElementById("final-score");

// Score display elements
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");

// Timer display
const timeEl = document.getElementById("time");


/* =====================================================
   GAME SETTINGS
   ===================================================== */

// Size of each block in the grid
const blockHeight = 50;
const blockWidth = 50;

// Calculate number of rows and columns based on board size
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

// Game state variables
let score = 0;
let highScore = 0;

// Snake movement speed (milliseconds)
let speed = 300;

// Interval IDs
let intervalId = null;
let timerId = null;

// Snake movement direction
let direction = "down";

// Game timer
let seconds = 0;


/* =====================================================
   GAME DATA STRUCTURES
   ===================================================== */

// Store all blocks in grid
const blocks = [];

// Initial snake body coordinates
const snake = [
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 }
];

// Random food position
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols)
};


/* =====================================================
   CREATE GRID
   ===================================================== */

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {

    // Create block element
    const block = document.createElement("div");
    block.classList.add("block");

    // Add block to board
    board.appendChild(block);

    // Store block reference
    blocks[`${row}-${col}`] = block;
  }
}


/* =====================================================
   START GAME
   ===================================================== */

function startGame() {

  // Hide modal screen
  modal.style.display = "none";

  // Draw snake and food
  render();
  drawFood();

  // Start game timer
  startTimer();

  // Start main game loop
  intervalId = setInterval(gameLoop, speed);
}


/* =====================================================
   TIMER LOGIC
   ===================================================== */

function startTimer() {

  // Prevent multiple timers
  clearInterval(timerId);

  timerId = setInterval(() => {

    seconds++;

    // Convert seconds to minutes + seconds
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    // Format with leading zero
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    // Update UI
    timeEl.textContent = `${mins}:${secs}`;

  }, 1000);
}


/* =====================================================
   RENDER SNAKE
   ===================================================== */

function render() {

  snake.forEach((segment) => {

    blocks[`${segment.x}-${segment.y}`].classList.add("fill");

  });

}


/* =====================================================
   CLEAR OLD SNAKE
   ===================================================== */

function clearSnake() {

  snake.forEach((segment) => {

    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");

  });

}


/* =====================================================
   FOOD FUNCTIONS
   ===================================================== */

// Draw food on board
function drawFood() {

  blocks[`${food.x}-${food.y}`].classList.add("food");

}

// Remove food from board
function removeFood() {

  blocks[`${food.x}-${food.y}`].classList.remove("food");

}


/* =====================================================
   MAIN GAME LOOP
   ===================================================== */

function gameLoop() {

  let head;

  /* Determine next snake head position based on direction */

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  }

  else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  }

  else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  /* WALL COLLISION DETECTION */

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    gameOver();
    return;
  }

  // Remove current snake rendering
  clearSnake();

  // Add new head to snake
  snake.unshift(head);

  /* FOOD COLLISION */

  if (head.x === food.x && head.y === food.y) {

    score++;

    // Increase game speed every 5 points
    if (score % 5 === 0 && speed > 80) {

      speed -= 30;

      clearInterval(intervalId);
      intervalId = setInterval(gameLoop, speed);
    }

    scoreEl.textContent = score;

    removeFood();

    // Generate new food
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    drawFood();

  } else {

    // Remove snake tail if no food eaten
    snake.pop();
  }

  // Render updated snake
  render();
}


/* =====================================================
   KEYBOARD CONTROLS
   ===================================================== */

addEventListener("keydown", (event) => {

  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  }

  else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }

  else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  }

  else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }

});


/* =====================================================
   GAME OVER
   ===================================================== */

function gameOver() {

  // Stop game loop
  clearInterval(intervalId);

  // Stop timer
  clearInterval(timerId);

  // Show modal
  modal.style.display = "flex";
  modalTitle.textContent = "Game Over";

  finalScore.textContent = score;

  // Update high score
  if (score > highScore) {

    highScore = score;
    highScoreEl.textContent = highScore;

  }

  startBtn.textContent = "Restart Game";
}


/* =====================================================
   START / RESTART BUTTON
   ===================================================== */

startBtn.addEventListener("click", () => {

  if (modalTitle.textContent === "Game Over") {
    restartGame();
  } else {
    startGame();
  }

});


/* =====================================================
   RESTART GAME
   ===================================================== */

function restartGame() {

  clearInterval(intervalId);
  clearInterval(timerId);

  // Reset timer
  seconds = 0;
  timeEl.textContent = "00:00";

  // Reset score
  score = 0;
  scoreEl.textContent = score;

  // Reset speed
  speed = 300;

  // Reset direction
  direction = "right";

  // Remove snake from board
  clearSnake();

  // Reset snake position
  snake.length = 0;
  snake.push(
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 }
  );

  // Remove old food
  removeFood();

  // Generate new food
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  modal.style.display = "none";

  // Render new game state
  render();
  drawFood();

  // Restart timer
  startTimer();

  // Restart game loop
  intervalId = setInterval(gameLoop, speed);
}