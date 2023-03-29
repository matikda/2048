 let gameBoard = [  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// update the game board to reflect the current state of the game
function render() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let tile = document.querySelector(`#tile-${row}-${col}`);
      let value = gameBoard[row][col];
      if (value === 0) {
        tile.src = "path/to/empty-tile.jpg";
      } else if (value === 2) {
        tile.src = "path/to/zendaya-2.jpg";
      } else if (value === 4) {
        tile.src = "path/to/zendaya-4.jpg";
      } else if (value === 8) {
        tile.src = "path/to/zendaya-8.jpg";
      } else if (value === 16) {
        tile.src = "path/to/zendaya-16.jpg";
      } else if (value === 32) {
        tile.src = "path/to/zendaya-32.jpg";
      } else if (value === 64) {
        tile.src = "path/to/zendaya-64.jpg";
      } else if (value === 128) {
        tile.src = "path/to/zendaya-128.jpg";
      } else if (value === 256) {
        tile.src = "path/to/zendaya-256.jpg";
      } else if (value === 512) {
        tile.src = "path/to/zendaya-512.jpg";
      } else if (value === 1024) {
        tile.src = "path/to/zendaya-1024.jpg";
      } else if (value === 2048) {
        tile.src = "path/to/zendaya-2048.jpg";
      }
    }
  }
}

// start the game
startGame();

// handle keyboard input
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 40) {
    moveDown();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  }
});
