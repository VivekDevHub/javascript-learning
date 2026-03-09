// const board = document.querySelector(".board");
// const blockHeight = 50;
// const blockWidth = 50;

// const cols = Math.floor(board.clientWidth / blockWidth);
// const rows = Math.floor(board.clientHeight / blockHeight);
// let intervalId = null;

// let food = {
//   x: Math.floor(Math.random() * rows),
//   y: Math.floor(Math.random() * cols),
// };

// const blocks = [];
// const snake = [
//   {
//     x: 1,
//     y: 3,
//   },
// ];

// let direction = "down";

// // for ( let i = 0; i<rows*cols; i++) {
// //     const block = document.createElement('div');
// //     block.classList.add('block');
// //     board.appendChild(block);
// // }

// for (let row = 0; row < rows; row++) {
//   // har ek row jke liy ek baar coloumn chalega
//   for (let col = 0; col < cols; col++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
//     block.innerText = `${row}-${col}`; // sare box me row col print kar diye hai
//     blocks[`${row}-${col}`] = block;
//   }
// }

// function render() {
//   snake.forEach((segment) => {
//     blocks[`${segment.x}-${segment.y}`].classList.add("fill");
//   });
// }

// intervalId = setInterval(() => {
//   let head = null;

//   blocks[`${food.x}-${food.y}`].classList.add("food");

//   if (direction == "left") {
//     head = { x: snake[0].x, y: snake[0].y - 1 };
//   } else if (direction == "right") {
//     head = { x: snake[0].x, y: snake[0].y + 1 };
//   } else if (direction == "down") {
//     head = { x: snake[0].x + 1, y: snake[0].y };
//   } else if (direction == "up") {
//     head = { x: snake[0].x - 1, y: snake[0].y };
//   }

//   if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
//     alert("GameOver");
//     clearInterval(intervalId);
//   }

//   if (head.x == food.x && head.y == food.y) {
//     blocks[`${food.x}-${food.y}`].classList.remove("food");
//     food = {
//       x: Math.floor(Math.random() * rows),
//       y: Math.floor(Math.random() * cols),
//     };
//     blocks[`${food.x}-${food.y}`].classList.add("food");
//   } else {
//     snake.pop();
//   }
//   snake.forEach((segment) => {
//     blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
//   });
//   snake.unshift(head);
//   snake.pop();
//   render();
// }, 300);

// addEventListener("keydown", (event) => {
//   if (event.key == "ArrowUp") {
//     direction = "up";
//   } else if (event.key == "ArrowDown") {
//     direction = "down";
//   } else if (event.key == "ArrowLeft") {
//     direction = "left";
//   } else if (event.key == "ArrowRight") {
//     direction = "right";
//   }
// });

const board = document.querySelector(".board");

const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;

let direction = "down";

const blocks = [];

const snake = [
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

// GRID CREATE
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");

    board.appendChild(block);

    blocks[`${row}-${col}`] = block;
  }
}

// RENDER SNAKE
function render() {
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// REMOVE OLD SNAKE
function clearSnake() {
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
}

// DRAW FOOD
function drawFood() {
  blocks[`${food.x}-${food.y}`].classList.add("food");
}

// REMOVE FOOD
function removeFood() {
  blocks[`${food.x}-${food.y}`].classList.remove("food");
}

// GAME LOOP
intervalId = setInterval(() => {
  let head;

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  // WALL COLLISION
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    alert("Game Over");
    return;
  }

  clearSnake();

  snake.unshift(head);

  // FOOD COLLISION
  if (head.x === food.x && head.y === food.y) {
    removeFood();

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    drawFood();
  } else {
    snake.pop();
  }

  render();
}, 300);

// KEYBOARD CONTROL
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const board = document.querySelector(".board");

  const blockHeight = 50;
  const blockWidth = 50;

  const cols = Math.floor(board.clientWidth / blockWidth);
  const rows = Math.floor(board.clientHeight / blockHeight);

  console.log(rows, cols);

});
// INITIAL RENDER
render();
drawFood();
